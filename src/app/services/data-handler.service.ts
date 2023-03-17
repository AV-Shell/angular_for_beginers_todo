/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TestData } from '../data/testData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  getCategories(): Category[] {
    return TestData.categories;
  }

  getAllCategories() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  getAllTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  getTasksByCategoryId(id: number) {
    const filteredTasks = TestData.tasks.filter(t => t.category?.id === id);
    console.log(filteredTasks);
    this.tasksSubject.next(filteredTasks);
  }
}
