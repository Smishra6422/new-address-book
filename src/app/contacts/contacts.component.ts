import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactsService, Contact } from '../contacts';
import { SharedDataService } from '../shared';
import { ContactDataService } from './services/contact-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  selectedContactId: String = '';
  selectedContactIdObs: Subscription;
  refreshContactsObs: Subscription;
  
  constructor(
    private contactsService: ContactsService, 
    private sharedDataService: SharedDataService,
    private contactDataService: ContactDataService,
    private router: Router,) { 
  }
  
  ngOnInit(): void {
    this.selectedContactIdObs = this.contactDataService.selectedContactId.subscribe((id: String) => this.selectedContactId = id);

    this.contactsService.getContact().subscribe(data => {
      this.contacts = data;
    });

    this.refreshContactsObs = this.sharedDataService.refreshContacts.subscribe(isReload => {
      if(isReload) {
        this.contactsService.getContact().subscribe(data => {
          this.contacts = data;
        });
      }
    })
  }

  onSelectContact(contactId: String) {
    this.contactDataService.selectedContactId.next(contactId);
    this.router.navigateByUrl('/contacts/contact-detail/'+contactId);
  }

  ngOnDestroy() {
    this.selectedContactIdObs.unsubscribe();
    this.refreshContactsObs.unsubscribe();
  }
}
