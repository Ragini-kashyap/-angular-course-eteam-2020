
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import {ContactsComponent} from './components/contacts.component';
import { AuthGuard } from '../shared/guards/auth.guard';

// Setting up Feature Routing
const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/1', component: ContactDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
