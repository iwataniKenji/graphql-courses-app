import { ProductsService } from './../services/products.services';
import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
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
  providers: [ProductsResolver, ProductsService],
})
export class HttpModule {}
