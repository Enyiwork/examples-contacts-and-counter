import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CounterService } from './services/counter.service';
import { ContactService } from './services/contact.service';

import { AppComponent } from './app.component';
import { CounterUiComponent } from './counter-ui/counter-ui.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { ContactFormComponent } from './contact-list/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterUiComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
