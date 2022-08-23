/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Products } from 'src/products/model-class/products';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
   private Products: Products[] = [];

    insertProduct( title: string, description: string, price: number){
        const prodId = new Date().toString();
        const newProduct = new Products(new Date().toString(), title, description, price);
        this.Products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.Products];
    }

    private findProduct(id: string): [Products, number]{
        const productIndex = this.Products.findIndex(product => product.id === id);
        const product = this.Products[productIndex];
        if(!product){
            throw new NotFoundException('could not find product');
        }
        return [product, productIndex];
    }

    getSingleProduct(productId: string){
        const product = this.findProduct(productId)[0];
        return {...product};
    }

    updateProduct(productId: string, productTitle: string, productDescription: string, productPrice: number){
        const [product ,index] = this.findProduct(productId);
        const updatedProduct = {...Products};
        return [productTitle, productDescription, productPrice, product, index,updatedProduct]
    }
    


    deleteProducts(productId: string){
        const index = this.findProduct(productId)[1];
        this.Products.splice(index,1);
    }
}
