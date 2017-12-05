import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  contacts: any[] = [
    { id: 5,  name: "Jose Jones",    phone: "777-777-7777"},
    { id: 15, name: "Mary Martinez", phone: "888-888-8888"},
    { id: 25, name: "Bianca Bright", phone: "999-999-9999"},
  ]

  constructor() { }

  addContact(theContact: any) {
    const lastIndex = this.contacts.length - 1;
    const lastContact = this.contacts[lastIndex];

    // give the new contact a unique ID (last contact's ID +1)
    theContact.id = lastContact.id + 3;

    this.contacts.push(theContact);

  }

  deleteContact(contactId: number) {
    let contactIndex;

    this.contacts.forEach((oneContact, index) => {
      if (oneContact.id === contactId) {
        contactIndex = index;
      }
    });

    this.contacts.splice(contactIndex, 1);
  }

}
