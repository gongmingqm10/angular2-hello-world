import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`,
  styleUrls: ['./product-image.component.css'],
  host: {'class': 'ui small image'}
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
