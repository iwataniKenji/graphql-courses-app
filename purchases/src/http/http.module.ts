import { MessagingModule } from './../messaging/messaging.module';
import { customersResolver } from './graphql/resolvers/customers.resolver';
import { PurchasesService } from './../services/purchases.services';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { ProductsService } from './../services/products.services';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { CustomersService } from 'src/services/customers.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import path from 'node:path';

@Module({
  // possibilita leitura do .env no root automaticamente
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver,
    ProductsService,
    PurchasesResolver,
    PurchasesService,
    customersResolver,
    CustomersService,
  ],
})
export class HttpModule {}
