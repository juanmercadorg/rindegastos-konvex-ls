import { Test, TestingModule } from '@nestjs/testing';
import { KonvexService } from './konvex.service';

describe('KonvexService', () => {
  let service: KonvexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KonvexService],
    }).compile();

    service = module.get<KonvexService>(KonvexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
