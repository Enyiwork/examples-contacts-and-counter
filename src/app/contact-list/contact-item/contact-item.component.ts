import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contactInfo: any;

  constructor(private contactThang: ContactService) { }

  ngOnInit() {
  }

  deleteContactClick() {
    // use the service's method to delete the contact directly
    this.contactThang.deleteContact(this.contactInfo.id);
  }

}
