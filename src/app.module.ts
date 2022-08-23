import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controller/products/products.controller';
import { ProductsService } from './products/service/products/products.service';
import { ProductsModule } from './products/module/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
