import { Schema } from 'mongoose';
import { AnimalTipo } from './animais-tipo/animal-tipo.enum';
import { CavaloSchema } from './cavalo.schema';
import { CoelhoSchema } from './coelho.schema';
import { LoboSchema } from './lobo.schema';

/**
 * Make sure to attach any hooks to `animalsArraySchema`
 * **before** calling this function.
 */
export function registrarAnimaisSchemaDiscriminator(animaisArraySchema: Schema.Types.DocumentArray): void {
    animaisArraySchema.discriminator(AnimalTipo.Coelho, CoelhoSchema);
    animaisArraySchema.discriminator(AnimalTipo.Lobo, LoboSchema);
    animaisArraySchema.discriminator(AnimalTipo.Cavalo, CavaloSchema);
}
