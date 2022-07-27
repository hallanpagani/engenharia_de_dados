import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AnimalSchema } from '../animais/animal.schema';
import { registrarAnimaisSchemaDiscriminator } from '../animais/register-animal-schema-discriminator';

@Schema()
export class Floresta {
    @Prop({ required: true })
    nome!: string;

    @Prop({ required: true, type: [AnimalSchema] })
    animais!: unknown[];
}

export const FlorestaSchema = SchemaFactory.createForClass(Floresta);

const animalsArraySchema = FlorestaSchema.path('animais') as MongooseSchema.Types.DocumentArray;
registrarAnimaisSchemaDiscriminator(animalsArraySchema);

export type FlorestaDocument = Floresta & Document;
