import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema() //{ _id: false } 
class LoboModel {
    @Prop({ required: true })
    TamanhoCaninoCm!: number;
}

export const LoboSchema = SchemaFactory.createForClass(LoboModel);
