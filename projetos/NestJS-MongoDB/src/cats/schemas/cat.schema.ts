import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Owner } from 'src/owners/schemas/owner.schema';
import mongoose from 'mongoose';

export type CatDocument = Cat & Document;

@Schema({ timestamps: true })
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: Owner.name }])
  owners: [Owner];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
