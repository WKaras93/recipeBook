import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { DishType } from '../shared/dish-type'

@Injectable({
  providedIn: 'root'
})
export class DishTypeService {

  constructor() { }

  public getDishType(): Observable<any> {
    const dishTypes = new DishType();
    return of(dishTypes.data);
  }
}
