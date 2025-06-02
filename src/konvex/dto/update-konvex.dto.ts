import { PartialType } from '@nestjs/mapped-types';
import { CreateKonvexDto } from './create-konvex.dto';


export class UpdateKonvexDto extends PartialType(CreateKonvexDto) {}
