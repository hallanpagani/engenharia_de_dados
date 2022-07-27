import { ApiProperty } from "@nestjs/swagger";

export class AddFlorestaDto {
    @ApiProperty()
    NomeFloresta!: string;
}