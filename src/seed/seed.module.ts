import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { RindegastosService } from 'src/rindegastos/rindegastos.service';
import { RindegastosModule } from 'src/rindegastos/rindegastos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ RindegastosModule]
})
export class SeedModule {}
