import { Module } from '@nestjs/common';
import { ProductsController } from 'src/products/controller/products/products.controller';
import { ProductsService } from 'src/products/service/products/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
