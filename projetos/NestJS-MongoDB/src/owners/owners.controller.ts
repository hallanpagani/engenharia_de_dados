import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OwnersService } from './owners.service';
import { Owner } from './schemas/owner.schema';

@Controller('owners')
export class OwnersController {
  constructor(private readonly ownerService: OwnersService) {}

  @Post()
  create(@Body() data: Owner) {
    return this.ownerService.create(data);
  }

  @Get()
  findAll() {
    return this.ownerService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() data: Owner) {
    return this.ownerService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerService.delete(id);
  }
}
