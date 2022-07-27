import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Floresta, FlorestaSchema } from './floresta/floresta.schema';
import { ForestController } from './floresta/floresta.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Floresta.name, schema: FlorestaSchema }]),
        MongooseModule.forRoot('mongodb+srv://<user>:<pass>@cluster0.xpto.mongodb.net/reinoanimal?retryWrites=true&w=majority')
    ],
    controllers: [ForestController],
    providers: [],
})
export class AppModule {}
