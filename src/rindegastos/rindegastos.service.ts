import { Injectable, Inject, forwardRef } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { Rindegastos } from './entities/rindegasto.entity';
import { KonvexService } from 'src/konvex/konvex.service';
import { CreateExpense } from './entities/gasto.entity';
import { ExpenseReport } from './entities/rindegasto.entity';

@Injectable()
export class RindegastosService {

  private informes: ExpenseReport [] = [];

constructor (
    @Inject(forwardRef(() => KonvexService)) private readonly konvexService: KonvexService,
  ) {}


  async findAll(dateSince: Date, reportId: string): Promise<ExpenseReport[]> {

    var fecha = dateSince

    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      //Solo se consultan informes cerrados que no esten integrados
      url: 'https://api.rindegastos.com/v1/getExpenseReport?Id='+reportId,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzg1MjYiLCJjb21wYW55X2lkIjoiMTU0NjMiLCJyYW5kb20iOiIyZDFiNDEyMi01ZGQ3LTQ0NGMtYTE3NS0xNWRmZDllYWNiZDYiLCJpYXQiOjE3MjAyMDU5Nzh9.3OONCeCWUzWJPQZ65doyATdS9-phr4BIG7tKc868lbE',
        'Content-Type': 'application/json',
        'Cookie': 'UGYBU6275722R2=mqs9b3fje0kth9q3n1m87amji2'
      }
    }

    const resp = await axios.request<ExpenseReport[]>(config)
    return resp.data;
  }

  async fillInforms( dateSince: Date, reportId: string ) {

    this.informes = await this.findAll(dateSince, reportId)

  

    console.log(this.informes)

    return this.informes


  }

  async findExpenses(dateSince: Date, reportID: number){
    const config: AxiosRequestConfig = {
        method: 'get',
        maxBodyLength: Infinity,
        //Se consultan solo gastos aprobados
        url: 'https://api.rindegastos.com/v1/getExpenses?Status=1&ReportId='+reportID+'&Since='+"1900-01-01"+'',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzg1MjYiLCJjb21wYW55X2lkIjoiMTU0NjMiLCJyYW5kb20iOiIyZDFiNDEyMi01ZGQ3LTQ0NGMtYTE3NS0xNWRmZDllYWNiZDYiLCJpYXQiOjE3MjAyMDU5Nzh9.3OONCeCWUzWJPQZ65doyATdS9-phr4BIG7tKc868lbE',
          'Content-Type': 'application/json',
          'Cookie': 'UGYBU6275722R2=mqs9b3fje0kth9q3n1m87amji2'
        }
      }
  
      const resp = await axios.request<CreateExpense[]>(config)
      return resp.data;

  }

  showInforms(): ExpenseReport[] {

    return this.informes;
  }

  async FindEmployee(EmployeeId): Promise<string> {
    
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.rindegastos.com/v1/getUser?Id='+EmployeeId,
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzg1MjYiLCJjb21wYW55X2lkIjoiMTU0NjMiLCJyYW5kb20iOiIyZDFiNDEyMi01ZGQ3LTQ0NGMtYTE3NS0xNWRmZDllYWNiZDYiLCJpYXQiOjE3MjAyMDU5Nzh9.3OONCeCWUzWJPQZ65doyATdS9-phr4BIG7tKc868lbE',
        'Content-Type': 'application/json',
      }
    }

    const resp = await axios.request(config);
  
    console.log(resp.data);

    let item = resp.data['Identification']

    if (!item) {
      console.log("Empleado no encontrado");
      return "Empleado no encontrado"

    }
    console.log("Empleado encontrado" + item)
    return item;
  }


  async arrangeEntries(dateSince: Date, reportId: string) {


    let informesConsultados: ExpenseReport[] = await this.findAll(dateSince, reportId)
//falta agregar proyectos y cuenta asociada (PEDIR A KONVEX) PENDIENTE
    let journalEntryLines: {AccountCode: string; Debit: string; Credit: string; LineMemo: string, FCCurrency?: string, FCCredit?: string, FCDebit?: string}[] = [];
//falta agregar proyectos y cuenta asociada (PEDIR A KONVEX) PENDIENTE
    let otherEntryLines: { AccountCode: string; Debit: string; Credit: string; LineMemo: string, FCCurrency?: string, FCCredit?: string, FCDebit?: string}[] = [];

    console.log("hola, consulté los informes")
    console.log(informesConsultados)

    var report = informesConsultados;

    var employeReport = informesConsultados['EmployeeIdentification'];

    var expenses = await this.findExpenses(dateSince, report['Id']); // Obtener las líneas de gasto por ID del informe
    journalEntryLines = [];
    otherEntryLines = [];

    var reportType = report['ExtraFields'].find(field => field.Name === "Tipo de rendición")?.Code;

    //Si el tipo de rendición es caja chica entonces el crédito se irá a la cuenta de Caja Chica

    if (String(reportType) == 'CCH'){
      
      journalEntryLines.push( { AccountCode: '110101004', Debit: "0", Credit: report['ReportTotalApproved'].toString() , LineMemo: "FXR " +report['ReportNumber'] + " " + report['EmployeeName'] + " CC-"+ report['ExtraFields'].find(field => field.Name === "Área")?.Code});
    
    };

    //Si el tipo de rendición es Fondo fijo entonces el crédito se irá a la cuenta del empleado

    if (String(reportType) == 'FF'){

      journalEntryLines.push( { AccountCode: employeReport, Debit: "0", Credit: report['ReportTotalApproved'].toString() , LineMemo: "FXR " +report['ReportNumber'] + " " + report['EmployeeName'] + " CC-"+ report['ExtraFields'].find(field => field.Name === "Área")?.Code});

    };


    var comentarioAsientos = "FXR " + report['ReportNumber'] + " " + report['EmployeeName'] + " " + report['ExtraFields'].find(field => field.Name === "Área")?.Code;
    var U_IdInforme = String(reportId); 
        for (var expense of expenses['Expenses']) {
          console.log(expense)

      


            //Por ahora tomamos el campo RUT proveedor, en el caso de syncore se concatena con una "P" al inicio, lo que daría la cuenta mayor o socio de negocio

            var rutProveedor = await expense.ExtraFields.find(field => field.Name === "RUT proveedor")?.Value || null
            console.log("Rut: " + rutProveedor)

            var rutLimpio = await this.formatRut(rutProveedor)

            console.log(rutLimpio)

            await new Promise(resolve => setTimeout(resolve, 20000))


            var idEmpleado = await expense.UserId
            //console.log("id empleado" + idEmpleado);
            var empleado = await this.FindEmployee(idEmpleado)
            console.log("encontramos este empleado")
            console.log(empleado)

            //Busca el tipo de documento asociado al gasto, ya que si es factura o boleta de honorario tiene que crear otros asientos apartes para eso

            var tipoDoc = await expense.ExtraFields.find(field => field.Name === "Tipo de documento")?.Code
            console.log("tipo de documento es " + tipoDoc)
            console.log("el tipo del tipo de doc es" + typeof(tipoDoc))

            if (String(tipoDoc) !== "33" && String(tipoDoc) !== "99"){
              var U_IdInforme = String(reportId); 
              var U_IdGasto = String(expense.Id);
              journalEntryLines.push(
                { AccountCode: expense.CategoryCode, Debit: expense.OriginalAmount.toString(), Credit: "0" , LineMemo: "FXR " + report['ReportNumber'] + " " +report['EmployeeName'] + "- " + expense.Note})
  
            }
            

//Aquí se preparan las entradas diarías para la contabilización de las facturas y boletas de honorarios cuando vienen asociadas al gasto. También se va creando el asiento de las facturas y boletas.
            if (String(tipoDoc) === "33" || String(tipoDoc) === "99"){
              var U_IdInforme = String(reportId); 
              var U_IdGasto = String(expense.Id);
              var U_NumDocAsociado = expense.ExtraFields.find(field => field.Name === "Número de documento")?.Value
              var comentarioDocs = "FXR " + report['ReportNumber'] + " " + expense.Note + " " + expense.ExtraFields.find(field => field.Name === "Tipo de documento")?.Value + " " + expense.ExtraFields.find(field => field.Name === "Número de documento")?.Value
              console.log("pasó este tipo de doc a other line entry"  + tipoDoc)
              otherEntryLines.push(
                { AccountCode: expense.CategoryCode, Debit: expense.Net.toString(), Credit: "0" , LineMemo: "FXR " + report['EmployeeName'] + "- " + expense.Note + " " + expense.ExtraFields.find(field => field.Name === "Número de documento")?.Value}, //una linea para el monto neto
                { AccountCode: "11080103", Debit: expense.Tax.toString(), Credit: "0", LineMemo: "FXR " + report['EmployeeName'] + "- " + expense.Note + " "  + expense.ExtraFields.find(field => field.Name === "Número de documento")?.Value }, //una linea para el iva
                { AccountCode: rutLimpio, Debit: "0", Credit: expense.OriginalAmount.toString(), LineMemo: "FXR " + report['EmployeeName'] + "- " + expense.Note + " " + expense.ExtraFields.find(field => field.Name === "Número de documento")?.Value}) //una linea para el total

              journalEntryLines.push(
                { AccountCode: rutLimpio, Debit: expense.OriginalAmount.toString(), Credit: "0" , LineMemo: "FXR "+ report['ReportNumber'] + " "+ report['EmployeeName'] + "- " + expense.Note});

                let fact = await this.konvexService.createEntry(comentarioDocs, otherEntryLines,  U_NumDocAsociado, U_IdInforme, U_IdGasto) 

          }


//Esta es la linea del crédito de todo el informe que se carga a la cuenta contable del rendidor 
//Solo falta revisar que pasaría si el informe tiene monedas extranjeras      
     
      await new Promise(resolve => setTimeout(resolve, 10000))
      console.log("estas son las entrylines")
      console.log(journalEntryLines)
      await new Promise(resolve => setTimeout(resolve, 10000))
      console.log("estas son las otras entrylines")
      console.log(otherEntryLines)

      
    }

    let op = await this.konvexService.createEntry(comentarioAsientos, journalEntryLines, null, U_IdInforme)
    
    await new Promise(resolve => setTimeout(resolve, 20000))




  
  return 'Sincronización finalizada' ;
}

async formatRut(rut: string){

  if (!rut || typeof rut !== 'string') return "rut invalido";

  // Eliminar puntos y guiones
  const parteNumerica = rut.split('-')[0];

  // Extraer solo los dígitos numéricos al inicio (ignorando el dígito verificador final si está)
  const match = parteNumerica.replace(/\./g, '');
  if (!match) return "rut invalido";

  return `P${match}`;

}

}

//Pendientes
//Agregar proyecto y cuentas asociadas (pedido a konvex)
//OK: Crear socios de negocios con los nombres de syncore (pedido a konvex) ok
//Hacer ejemplo de boleta de honorario (pedido a syncore)
//Replicar el servicio pero consultando los informes por id
//marcar como integrado el informe
//DOING completar los datos de la cabecera: comentario, fecha de documento y proyecto
//DOING completar los datos de la cabecera cuando es una factura: referencia 1, comentario, fecha de documento, indicador, folio
//OK Cuando se trae de varias facturas o boletas de honorarios, hacer que se registren por separado ok
//OK Filtrar solo por gastos aprobados