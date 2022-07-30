import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  // possibilita leitura do .env no root automaticamente
  imports: [ConfigModule.forRoot()],
})
export class HttpModule {}
