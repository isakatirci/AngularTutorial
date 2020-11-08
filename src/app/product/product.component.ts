import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  title = 'Ürün Listesi';
  filterText: string = 'filterText';
  products: any[] = new Array(50).fill(0).map((item, index) => {
    return {
      id: index,
      name: 'Product' + index,
      price: index * 1000,
      category: 'Category' + index,
      description: 'Description' + index,
      imageUrl:
        'https://productimages.hepsiburada.net/s/44/550/10807020748850.jpg',
    };
  });
  ngOnInit(): void {}
  sepeteEkle(product): void {
    alert(product.name);
  }
}
