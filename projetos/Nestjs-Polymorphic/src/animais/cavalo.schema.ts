import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema() //{ _id: false } 
class CavaloModel {
    @Prop({ required: true })
    VelocidadeMediaKm!: number;
}

export const CavaloSchema = SchemaFactory.createForClass(CavaloModel);
