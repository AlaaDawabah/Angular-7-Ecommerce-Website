import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncremntItemCountService {
  itemCount = new BehaviorSubject(1);
  itemCountObs = this.itemCount.asObservable();
  constructor() { }
  updateItemCount(count) {
    this.itemCount.next(count);
  }
}
