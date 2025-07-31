**Integración SAP BO a través de Konvex

El siguiente documento explica como está construida la integración Rindegastos <> SAP BO a través de la API de Konvex.

Se construyó este servicio para por un lado consumir la API de Rindegastos y obtener los informes cerrados para contabilizar los gastos como asientos contables en SAP BO.

En el archivo rindegastos.controller.ts se encuentran los endpoints principales que hacen funcionar este servicio y que explicamos a continuación:

--GET /rindegastos/entries: Es el metodo principal el cual hay que indicar una fecha desde y el id del reporte en Rindegastos. Este metodo se encarga de buscar el reporte en Rindegastos, consultar los gastos aprobados asociados, generar el arreglo y enviarlo a SAP para crear los asientos contables dentro de las "Entradas Diarias" (Journal Entries). Por ejemplo un llamado a este metodo sería localhost:3002/rindegastos/entries?dateSince=2025-03-03&reportId=9853611

--GET /rindegastos/reports: Es el metodo para buscar un reporte en Rindegastos a través de su fecha y id. Por ejemplo un llamado a este metodo es localhost:3002/rindegastos/reports?dateSince=2025-03-03&reportId=9853611

--GET /rindegastos/allreports: Es el metodo para listar varios reportes, enviando la fecha desde y hasta que se quiera consultar. Por ejemplo un llamado a este metodo es localhost:3002/rindegastos/reports?dateSince=2025-03-03&dateUntil=2025-04-03

**Archivo .env

En el archivo .env se deben especificar ciertas variables de entorno para que el servicio funcione, las cuales deben ser:

#Datos de autentificación de SAP para Konvex

X_SECRET= Token de Konvex
X_SOFTWARE= sap (Siempre es sap, a menos que se quiera establecer la conexión a otro ERP)
X_DB= Base de datos de SAP
X_USER= Usuario para acceder a SAP
X_APIKEY= Contraseña para acceder a SAP
X_URL= URL configurada para el acceso a la bd de sap

#Datos de autentificación de Rindegastos

RG_APIKEY= token de Rindegastos
RG_ADMINUSER= id de usuario admin, es usado para dejar comentarios en el historial del informe cuando hay un error o cuando se integró con éxito.

**Manejo de errores

La función principal (arrangeEntries) que se encuentra en rindegastos.services.ts es la que se encarga de buscar los informes y gastos en Rindegastos y hacer el arreglo para crear los asientos en SAP. Esta función devuelve el arreglo del asiento creado o bien el mensaje de error si hubo un problema durante la sincronización. Los manejos de errores se hacen con HttpException y HttpStatus, pero hay que tener en cuenta que Konvex aún cuando el servicio arroja un error devuelve el mensaje, pero normalmente el front no lo toma como una caída, así que recomiendo lo siguiente para capturar el error correctamente desde el front:

Por ejemplo, en un front construido con Angular se puede construir un servicio donde se haran los request http hacia el back, en este caso creamos el servicio http.service.ts con la función SincronizarInforme() que hará el llamado al back para hacer el arreglo del asiento que será enviado a SAP:

    SincronizarInforme(idInforme: string){

        return this.httpClient.get(`http://localhost:3005/rindegastos/entries?dateSince=2025-06-16&reportId=${idInforme}`);

    }

Después dentro del .ts del componente tengo la función que llamará este servicio y se hace un control de errores para manejar bien las respuestas del back (usando next: y error:). Dentro de next colocamos un filtro para leer el status, ya que como se mencionó en el punto anterior, desde el back a veces se reciben errores que el front no los asume como tal por eso aparte del error: en el next: se pone un if para leer errores con código 400 o mayores. Después el mensaje de error o éxito es almacenado en this.resultado para así mostrar en el front.


  Sincronizar(id: string){

    this.httpService.SincronizarInforme(id)
    .subscribe({
      next: (respuesta: any) => {
        if (respuesta?.status && respuesta.status >= 400){
          const msg = respuesta.message || 'Error inesperado';
          this.resultado = [...[msg]];
          this.cdr.detectChanges();
          return;


        }
        console.log(respuesta);
        console.log('hola ok');
        let mensajeSync = 'Sincronización finalizada, id SAP: '+respuesta.number;
        this.resultado = [...[mensajeSync]];
        this.cdr.detectChanges();},

      error: (error) => {
        console.log(error);
        console.log('hola error');
        console.log(error.message);
        this.resultado = [...[error.message]];
        this.cdr.detectChanges();


      }
    }
  );

  }

  Ejemplo del botón en el .html del componente que accionaría la función Sincronizar():


                <tbody>
                    <tr *ngFor="let element of elements">
                        <td>{{ element.id }}</td>
                        <td>
                        <button type="button" class="btn btn-info btn-sync" title="contabilizar" (click)="Sincronizar(element.id)"> Contabilizar
                        </button>
                        </td>
                        <td>{{ resultado }}</td>
                    </tr>
                </tbody>


Fin.



