import { Cat, CatSchema } from './schemas/cat.schema';

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
