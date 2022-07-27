import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema() //{ _id: false } 
class CoelhoModel {
    @Prop({ type: [String] })
    VegetaisQueMaisGosta: string[] = [];
}
export const CoelhoSchema = SchemaFactory.createForClass(CoelhoModel);
