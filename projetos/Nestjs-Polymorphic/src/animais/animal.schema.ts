import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AnimalTipo } from './animais-tipo/animal-tipo.enum';

// eslint-disable-next-line @typescript-eslint/naming-convention
@Schema({ _id: false, discriminatorKey: 'tipo' })
class AnimalModel {
    @Prop({ type: String, required: true, enum: Object.values(AnimalTipo) })
    tipo!: AnimalTipo;

    @Prop({ required: true })
    NumeroDePernas!: number;
}
export const AnimalSchema = SchemaFactory.createForClass(AnimalModel);
