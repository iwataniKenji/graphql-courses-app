import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './test.controller';

@Module({
  // possibilita leitura do .env no root automaticamente
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TestController],
})
export class HttpModule {}
