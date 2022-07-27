import { ApiProperty } from "@nestjs/swagger";

export class AddAnimalDto {
    @ApiProperty()
    tipo!: string;

    @ApiProperty()
    NumeroDePernas!: number;
}