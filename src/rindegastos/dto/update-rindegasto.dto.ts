import { PartialType } from '@nestjs/mapped-types';
import { CreateRindegastoDto } from './create-rindegasto.dto';

export class UpdateRindegastoDto extends PartialType(CreateRindegastoDto) {}
