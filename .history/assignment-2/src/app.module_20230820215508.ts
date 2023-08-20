import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './config/database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      providers: [...databaseProviders],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
