import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkerModule } from './marker/marker.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [
    MarkerModule,
    PictureModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@sandras-jga-cluster.gks3rfx.mongodb.net/sandras-jga?appName=sandras-jga-cluster&retryWrites=true&w=majority`),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
