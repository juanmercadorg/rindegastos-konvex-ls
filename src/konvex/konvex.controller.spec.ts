import { Test, TestingModule } from '@nestjs/testing';
import { KonvexController } from './konvex.controller';
import { KonvexService } from './konvex.service';

describe('KonvexController', () => {
  let controller: KonvexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonvexController],
      providers: [KonvexService],
    }).compile();

    controller = module.get<KonvexController>(KonvexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
