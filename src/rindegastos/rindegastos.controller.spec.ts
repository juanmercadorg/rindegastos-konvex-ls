import { Test, TestingModule } from '@nestjs/testing';
import { RindegastosController } from './rindegastos.controller';
import { RindegastosService } from './rindegastos.service';

describe('RindegastosController', () => {
  let controller: RindegastosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RindegastosController],
      providers: [RindegastosService],
    }).compile();

    controller = module.get<RindegastosController>(RindegastosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
