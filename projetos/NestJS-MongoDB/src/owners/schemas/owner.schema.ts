import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type OwnerDocument = Owner & Document;

@Schema({ timestamps: true })
export class Owner {
  @Prop({ required: true })
  name: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
