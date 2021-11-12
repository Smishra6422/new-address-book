import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  refreshContacts = new Subject<Boolean>();
  isLoading = new Subject<Boolean>();
}
