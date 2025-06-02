import { Injectable, Inject, forwardRef } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { Invoices } from './entities/konvex.entity';
import { Entries } from './entities/konvex_entries.entity';
import { CreateEntries } from './entities/konvex_entries_create.entity';
import { RindegastosService } from 'src/rindegastos/rindegastos.service';
import { Vendor } from './entities/konvex_vendors.entity';
import { Datum } from './entities/konvex.entity';


@Injectable()
export class KonvexService {

  private facturas: Invoices [] = [];
  private journalEntries: Entries [] = [];
  private createJournalEntries: CreateEntries [] = [];

  constructor (
    @Inject(forwardRef(() => RindegastosService)) private readonly rindegastosService: RindegastosService,
  ) {}


  async findAllInvoices(): Promise<Invoices[]> {

    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.getkonvex.com/core/api/invoices',
      headers: {
        'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
        'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
        'x-software': 'sap', 
        'x-testing': 'true', 
        'accept': 'application/json'
      }
    }

    const resp = await axios.request<Invoices[]>(config)
    return resp.data;
  }

  async fillInvoices() {

    this.facturas = await this.findAllInvoices()

  

    console.log(this.facturas)

    return this.facturas


  }

  showInforms(): Invoices[] {

    return this.facturas;
  }



  async findAllEntries(): Promise<Entries[]> {
    
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.getkonvex.com/core/api/payroll/journal-entries',
      headers: {
        'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
        'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
        'x-software': 'sap', 
        'x-testing': 'true', 
        'accept': 'application/json'
      }
    }

    const resp = await axios.request<Entries []>(config)
    return resp.data;
  }

  async createEntry(comentario, entries: { AccountCode: string; Credit: string; Debit: string; LineMemo: string, FCCurrency?: string, FCCredit?: string, FCDebit?: string}[], U_NumDocAsociado?, U_IdInforme?, U_IdGasto?, TransactionCode?): Promise<CreateEntries[]> {


    const config: AxiosRequestConfig = {

      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.getkonvex.com/core/api/payroll/journal-entries',
      headers: {

        'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
        'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
        'x-software': 'sap', 
        'x-testing': 'true', 
        'accept': 'application/json'
      },
      data: {Memo: comentario,  U_NumDocAsociado: U_NumDocAsociado, U_IdInforme: U_IdInforme, U_IdGasto: U_IdGasto, TransactionCode: TransactionCode,JournalEntryLines: entries }

    };
    console.log('esta es la entrada que se va a crear' + config.data)
    const resp = await axios.request<CreateEntries[]>(config)
    return resp.data['data']
  }

async findVendor(rut): Promise<string | null> {
    
    const config: AxiosRequestConfig = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.getkonvex.com/core/api/vendors/list',
      headers: {
        'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
        'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
        'x-software': 'sap', 
        'x-testing': 'true', 
        'accept': 'application/json'
      }
    }

    const resp = await axios.request<Vendor []>(config);
  
    console.log(resp.data['data'].find(item => item.FederalTaxID === rut));

    let item = resp.data['data'].find(item => item.FederalTaxID === rut)

    if (!item) {
      console.log("Vendor no encontrador");
      return null

    }
    console.log("id encontrado" + item['id'])
    return item['id'];
  }

async crearFacturaAfecta(invoice: {date: string, dueDate?: string, TransactionCode: string, supplier: {id: string, name:string, address?: string}, items: [{ ItemDescription: string, code:string, quantity: number, value: number, UnitPrice:number}], totalDiscount?: number, totalTax: number, total: number}): Promise<string | null> {

  const config: AxiosRequestConfig = {

    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.getkonvex.com/core/api/purchases/invoices',
    headers: {

      'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
      'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
      'x-software': 'sap', 
      'x-testing': 'true', 
      'accept': 'application/json'
    },
    data: {invoice}

  };
  //console.log('esta es la factura que se va a crear' + config.data)
  const resp = await axios.request(config)
  return resp.data['data']






}

async crearFacturaExenta(invoice: {date: string, dueDate?: string, TransactionCode: string, supplier: {id: string, name:string, address?: string}, items: [{ ItemDescription: string, code:string, quantity: number, value: number, UnitPrice:number}], total: number}) {

  const config: AxiosRequestConfig = {

    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.getkonvex.com/core/api/purchases/invoices',
    headers: {

      'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
      'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
      'x-software': 'sap', 
      'x-testing': 'true', 
      'accept': 'application/json'
    },
    data: {invoice}

  };
  //console.log('esta es la factura que se va a crear' + config.data)
  const resp = await axios.request(config)
  return resp.data['data']




}

async crearBoletaAfecta(invoice: {TransactionCode: string, supplier: {id: string, name:string, address?: string}, items: [{ ItemDescription: string, code:string, quantity: number, value: number, UnitPrice:number}], totalTax?: number, total: number}) {

  const config: AxiosRequestConfig = {

    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.getkonvex.com/core/api/purchases/invoices',
    headers: {

      'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
      'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
      'x-software': 'sap', 
      'x-testing': 'true', 
      'accept': 'application/json'
    },
    data: invoice

  };
  //console.log('esta es la boleta que se va a crear' + config.data)
  const resp = await axios.request(config)
  return resp.data['data']


}

async crearBoletaExenta(invoice: {TransactionCode: string, supplier: {id: string, name:string, address?: string}, items: [{ ItemDescription: string, code:string, quantity: number, value: number, UnitPrice:number}], total: number}) {

  const config: AxiosRequestConfig = {

    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.getkonvex.com/core/api/purchases/invoices',
    headers: {

      'X-Secret': '27cc8073-f166-4d5d-8af0-8dfb91d59f50:8297b7c06a2ccade385b47fe2c1c0d80db28dc3d621fd1dab8cd70f0c2c1eca20922d900b6c89542e1f6b7d05d0141eb',
      'x-connection': '06ce8ed0-ed33-11ef-900b-4f9dd8819335', 
      'x-software': 'sap', 
      'x-testing': 'true', 
      'accept': 'application/json'
    },
    data: invoice

  };
  //console.log('esta es la boleta que se va a crear' + config.data)
  const resp = await axios.request(config)
  return resp.data['data']




}

}




