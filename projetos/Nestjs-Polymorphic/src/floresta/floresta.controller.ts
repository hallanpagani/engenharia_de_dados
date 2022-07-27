import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Logger,
    NotFoundException,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Error as MongooseError, Model } from 'mongoose';
import { Floresta, FlorestaDocument } from 'src/floresta/floresta.schema';
import { AddAnimalDto } from './dto/adicionar-animal.dto';
import { AddFlorestaDto } from './dto/adicionar-floresta.dto';

@Controller('floresta')
export class ForestController {
    private readonly logger = new Logger(ForestController.name);
    /**
     * Nota: Para simplificar este exemplo, apenas injetamos diretamente o
     * camada do moongose  em nosso controlador.
     * Para um aplicativo real, use um serviço do NestJS!
     */
    constructor(@InjectModel(Floresta.name) private readonly FlorestaModel: Model<FlorestaDocument>) {}

    @Post()
    public async addFloresta(@Body() floresta: AddFlorestaDto): Promise<void> {
        await this.FlorestaModel.create({ nome: floresta.NomeFloresta, animais: [] });
    }

    @Put(':id/animais')
    public async addAnimal(@Param('id') id: string, @Body() animal: AddAnimalDto): Promise<void> {
        const floresta = await this.findForestOrThrow(id);

        // aqui não há lógica de domínio, mas em um real nós potencialmente
        // adicionaremos campos ao animal ou podemos modificar os dados de entrada.

        floresta.animais.push(animal);

        try {
            await floresta.save();
        } catch (error) {
            if (error instanceof MongooseError && error.name === 'ValidationError') {
                this.logger.warn(`O animal é invalido: ${error.message}`);
                throw new BadRequestException(error.message);
            }

            throw error;
        }
    }

    @Get()
    public async getAll(): Promise<unknown> {
        return await this.FlorestaModel.find({});
    }

    @Get(':id')
    public async getForest(@Param('id') florestaNome: string): Promise<unknown> {
        const floresta = await this.findForestOrThrow(florestaNome);

        return floresta.toObject();
    }

    private async findForestOrThrow(id: string) {
        const floresta = await this.FlorestaModel.findOne({ _id: id });
        if (!floresta) {
            throw new NotFoundException(`Nenhuma floresta com #id: '${id}' encontrada.`);
        }

        return floresta;
    }
}
