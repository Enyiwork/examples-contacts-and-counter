import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-ui',
  templateUrl: './counter-ui.component.html',
  styleUrls: ['./counter-ui.component.css'],
})
export class CounterUiComponent implements OnInit {

  constructor(private counterThang: CounterService) { }

  ngOnInit() {
  }

  userIncrease() {
    this.counterThang.increment();
  }

  userDecrease() {
    this.counterThang.decrement();
  }

}
