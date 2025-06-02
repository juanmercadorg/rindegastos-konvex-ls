import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SeedService } from './seed.service';


@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}



  @Get()
  findAll(@Query('dateSince') dateSince: Date, @Query('reportId') reportId: string) {
    return this.seedService.findInforms(dateSince, reportId);
  }

}
