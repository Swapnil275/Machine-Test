import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories/categories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'frontend';
  categories: any[] = []; // Initialize an empty array for categories

  constructor(private categoriesService: CategoriesService) {}

  // ngOnInit(): void {
  //   this.getCategories();
  // }

  getCategories() {
    this.categoriesService.getAllCategories().subscribe((data: any) => {
      console.log('Received categories:', data);
      this.categories = data; // Assign data to the categories property
    });
  }
}