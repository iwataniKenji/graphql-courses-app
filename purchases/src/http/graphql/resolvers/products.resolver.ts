import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from '../../../services/products.services';
import { AuthorizationGuard } from '../../auth/authorization.guard';

import { Product } from './../models/product';

@Resolver('test')
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  // sem autenticação -> rota pública
  @Query(() => [Product]) 
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }
}
