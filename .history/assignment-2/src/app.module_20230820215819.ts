import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => databaseProviders,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
