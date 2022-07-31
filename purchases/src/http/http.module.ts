import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestResolver } from './test.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  // possibilita leitura do .env no root automaticamente
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [TestResolver],
})
export class HttpModule {}
