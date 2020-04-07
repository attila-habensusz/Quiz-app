import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DisplayName } from '../models/DisplayName';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly displayNameSubject = new BehaviorSubject<DisplayName>(null);
  readonly displayNameObs$ = this.displayNameSubject.asObservable();

  getDisplayName(): DisplayName {
    return this.displayNameSubject.getValue();
  }

  setDisplayName(value: DisplayName) {
    this.displayNameSubject.next(value);
  }
}
