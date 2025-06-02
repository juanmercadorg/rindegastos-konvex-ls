import { Injectable } from '@nestjs/common';
import { INFORM_SEED } from './data/informes.seed';
import { RindegastosService } from 'src/rindegastos/rindegastos.service';


@Injectable()
export class SeedService {

  constructor (
    private readonly informeService: RindegastosService,
  ) {}

  findInforms(dateSince: Date, reportId: string) {

    let result = this.informeService.fillInforms(dateSince, reportId);
    return result;
  }

}
