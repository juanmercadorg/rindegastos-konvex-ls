import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { KonvexService } from './konvex.service';


@Controller('konvex')
export class KonvexController {
  constructor(private readonly konvexService: KonvexService) {}


  @Get('invoices')
  findAllInvoices() {
    return this.konvexService.findAllInvoices();
  }

  @Get('entries')
  findAllEntriesD() {
    return this.konvexService.findAllEntries();
  }

  @Post('entries')
  createEntries(
    @Body() data: { Memo: string, JournalEntryLines: { AccountCode: string; Credit: string; Debit: string; LineMemo: string, FCCurrency: string, FCCredit: string, FCDebit: string}[], U_NumDocAsociado?, U_IdInforme?, U_IdGasto?, TransactionCode? }

  ) {

    return this.konvexService.createEntry(data.Memo, data.JournalEntryLines, data.U_NumDocAsociado, data.U_IdInforme, data.U_IdGasto, data.TransactionCode);

  }

  @Get('vendors')
  GetVendors(
    @Query('rut') rut: string

  ) {

    return this.konvexService.findVendor(rut);

  }










}
