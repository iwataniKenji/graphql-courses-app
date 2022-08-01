import { CreateProductInput } from './../inputs/create-product-input';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProductsService } from '../../../services/products.services';
import { AuthorizationGuard } from '../../auth/authorization.guard';

import { Product } from './../models/product';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  // sem autenticação (@UseGuards) -> rota pública
  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  // com autenticação (@UseGuards) -> rota privada
  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
