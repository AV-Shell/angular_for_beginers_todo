import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { DataHandlerService } from 'src/app/services/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories: Category[] | undefined;

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => {
      this.categories = categories;
    });
  }

  showTasksByCategory(category: Category): void {
    console.log('category', category);
    this.dataHandler.getTasksByCategoryId(category?.id);
  }
}
