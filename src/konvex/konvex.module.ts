import { Module, forwardRef } from '@nestjs/common';
import { KonvexService } from './konvex.service';
import { KonvexController } from './konvex.controller';
import { RindegastosService } from 'src/rindegastos/rindegastos.service';
import { RindegastosModule } from 'src/rindegastos/rindegastos.module';

@Module({
  controllers: [KonvexController],
  providers: [KonvexService, RindegastosService],
  imports: [forwardRef(() => RindegastosModule)],
  exports: [ KonvexService]
})
export class KonvexModule {}
