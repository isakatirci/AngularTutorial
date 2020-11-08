import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}
  categories = new Array(50).fill(0).map((item, index) => 'Category' + index);

  ngOnInit(): void {}
}
