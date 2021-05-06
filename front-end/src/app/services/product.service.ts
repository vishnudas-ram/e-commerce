import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=[
    new Product(1,'OnePlus 8T 5G',' (Aquamarine Green, 12GB RAM, 256GB Storage) - 48MP Quad Camera | Snapdragon 865',100,'https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg'),
    new Product(2,'iPhone 12',' (Black, 128GB Storage) - dual- camera system with 12MP Ultra Wide and Wide cameras | A14 Bionic chip',100,'https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg'),
    new Product(3,'Mi 10i 5G',' (Midnight Black, 6GB RAM, 128GB Storage) - 108MP Quad Camera | Snapdragon 750G',100,'https://images-na.ssl-images-amazon.com/images/I/71jcE5EZHkL._SL1500_.jpg'),
    new Product(4,'Galaxy Fold',' (Black, 12GB RAM, 512GB Storage) - 16MP Triple Camera | Snapdragon 855',100,'https://images-na.ssl-images-amazon.com/images/I/71LhAERRPaL._SL1500_.jpg'),
    new Product(5,'OPPO Find X2',' (Black, 12GB RAM, 256GB Storage) - 48MP Triple Camera | Snapdragon 865 ',100,'https://images-na.ssl-images-amazon.com/images/I/91-2d0XeliL._SL1500_.jpg'),
    new Product(6,'Motorola G9',' (Sapphire Blue, 4GB RAM, 64GB Storage) - 48MP Quad Camera | Snapdragon 662',100,'https://images-na.ssl-images-amazon.com/images/I/51OOGvwG1GL._SL1000_.jpg'),
    new Product(7,'Galaxy Z Flip',' (Purple, 8GB RAM, 256GB Storage) - 12MP + 12MP Dual Camera | Snapdragon 855',100,'https://images-na.ssl-images-amazon.com/images/I/71Y1RR-AOCL._SL1500_.jpg'),
  ]

  constructor() { }
  getProducts():Product[]{
    return this.products
  }
}
