import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import {ContactsComponent} from './components/contacts.component';
// Feature's Main Switching Box
@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ContactsModule { }
