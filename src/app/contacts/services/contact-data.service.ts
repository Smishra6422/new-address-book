import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  selectedContactId = new Subject<String>();
}
