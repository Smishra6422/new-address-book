import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent, ContactDetailComponent } from '../contacts';
import { ContactFormSharedModule } from './shared/contact-form-shared.module';



@NgModule({
  declarations: [
    ContactDetailComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule, 
    ContactsRoutingModule,
    ContactFormSharedModule,
  ], 
  exports: []
})
export class ContactsModule { }
