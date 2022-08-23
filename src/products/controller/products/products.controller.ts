/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { ProductsService } from 'src/products/service/products/products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly service:ProductsService){}
    
    @Post()                                  
    addProduct(
        @Body('title') productTitle: string,                   //@Body annotation is used for Post Mapping
        @Body('description') productDescription: string,
        @Body('price') productPrice: number
    ){
      const generatedId =  this.service.insertProduct(productTitle,productDescription,productPrice);
      return {id: generatedId};
    }

    @Get()
    getAllProducts(){
        return this.service.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string){  
        return this.service.getSingleProduct(prodId);
    }

    @Patch('id')
    updateProduct(
        @Param('id') productId: string,
        @Body('title') productTitle: string,
        @Body('description') productDescription: string,
        @Body('price') productPrice: number
    ){
        this.service.updateProduct(productId, productTitle, productDescription,productPrice);
        return null;
    }

    @Delete('id')
    removeProduct(
        @Param('id') productId: string
    ){
        this.service.deleteProducts(productId);
        return null
    }; 
}
