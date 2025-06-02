import { Module, forwardRef } from '@nestjs/common';
import { RindegastosService } from './rindegastos.service';
import { RindegastosController } from './rindegastos.controller';
import { KonvexService } from 'src/konvex/konvex.service';
import { KonvexModule } from 'src/konvex/konvex.module';

@Module({
  controllers: [RindegastosController],
  providers: [RindegastosService, KonvexService],
  exports: [ RindegastosService ],
  imports: [forwardRef(() => KonvexModule)]
})
export class RindegastosModule {}
