import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://<user>:<pass>@cluster0.xpto.mongodb.net/?retryWrites=true&w=majority'),
    CatsModule,
    OwnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
