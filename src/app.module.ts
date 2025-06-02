import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RindegastosModule } from './rindegastos/rindegastos.module';
import { KonvexModule } from './konvex/konvex.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [RindegastosModule, KonvexModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
