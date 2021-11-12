import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<any> {
    return this.http.post('https://crudcrud.com/api/2f2f84fcc0c2499b9e599411880450b5/address-book', contact);
  }

  getContact(): Observable<any> {
    return this.http.get('https://crudcrud.com/api/2f2f84fcc0c2499b9e599411880450b5/address-book');
  }

  getContactById(id: String): Observable<any> {
    return this.http.get('https://crudcrud.com/api/2f2f84fcc0c2499b9e599411880450b5/address-book/'+ id);
  }

  deleteContact(contactId: String) {
    return this.http.delete('https://crudcrud.com/api/2f2f84fcc0c2499b9e599411880450b5/address-book/'+ contactId);
  }

  updateContact(id:String, updatedContact:Contact) {
    return this.http.put('https://crudcrud.com/api/2f2f84fcc0c2499b9e599411880450b5/address-book/'+ id, updatedContact);
  }
}
