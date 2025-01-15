import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './services/categories/categories.service';
import { CommonModule, NgFor } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgFor, FormsModule, CommonModule],
})
export class AppComponent {
  title = 'frontend';
  productName: string = '';
  categoryName: string = '';
  selectedCategory: string = '';
  editingProductId: number | null = null;
  categories: any[] = []; // Initialize an empty array for categories
  products: any[] = []; // Initialize an empty array for products/

  // Pagination
  currentPage: number = 1; // Current page number
  totalPages: number = 10; // Total pages (replace with a dynamic value from the backend)
  totalProducts: number = 0;
  pageSize: number = 10;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return; // Ignore invalid pages
    }
    this.currentPage = page;
    this.getProducts(page, this.pageSize); // Fetch data for the selected page
  }
  getCategories() {
    this.categoriesService.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    });
  }

  getProducts(page: number = 1, pageSize: number = 10): void {
    this.productsService
      .getAllProducts(page, pageSize)
      .subscribe((data: any) => {
        this.products = data.products; // Update the product list
        this.totalPages = data.totalPages; // Store the total pages
        this.totalProducts = data.totalProducts; // Store the total products
        this.currentPage = page; // Track the current page
        this.categories.find((category: any) => {
          data.products.map((product: any) => {
            if (
              category.CategoryName.toLowerCase() ===
              product.ProductCategory.toLowerCase()
            ) {
              product.categoryId = category.CategoryId;
            }
          });
        });
      });
  }

  resetForm(form: any): void {
    form.resetForm(); // Clear the form
    this.productName = '';
    this.selectedCategory = '';
    this.editingProductId = null; // Reset editing state
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const payload = {
        ProductName: this.productName,
        ProductCategory: this.selectedCategory,
      };

      if (this.editingProductId !== null) {
        // Update the existing product
        this.productsService
          .updateProduct(this.editingProductId, payload)
          .subscribe(
            (response: any) => {
              alert('Product updated successfully:');
              this.getProducts(); // Fetch the updated list of products
              this.resetForm(form); // Reset the form after update
            },
            (error) => {
              console.error('Error updating product:', error);
            }
          );
      } else {
        // Add a new product
        this.productsService.addProduct(payload).subscribe(
          (response: any) => {
            alert('Product added successfully:');
            this.getProducts(); // Fetch the updated list of products
            this.resetForm(form); // Reset the form after addition
          },
          (error) => {
            console.error('Error adding product:', error);
          }
        );
      }
    }
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(
      (response: any) => {
        alert('Product deleted successfully');
        this.getProducts();
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
  updateProduct(productId: number) {
    const product = this.products.find((p) => p.ProductId === productId);
    if (product) {
      this.productName = product.ProductName;
      this.selectedCategory = product.ProductCategory;
      this.editingProductId = productId;
    }
  }

  onSubmitCategory(form: any): void {
    if (form.valid) {
      // Check for duplicate category
      const duplicateCategory = this.categories.some(
        (category: any) =>
          category.CategoryName.toLowerCase() ===
          this.categoryName.toLowerCase()
      );

      if (duplicateCategory) {
        console.error('Duplicate category. This category already exists.');
        alert('Category already exists!');
        return; // Stop further execution
      }

      const payload = {
        CategoryName: this.categoryName,
      };

      this.categoriesService.addCategory(payload).subscribe(
        (response: any) => {
          alert('Category added successfully:');
          this.categoryName = '';
          this.getCategories(); // Refresh category list
        },
        (error) => {
          console.error('Error adding category:', error);
        }
      );
    }
  }
}
