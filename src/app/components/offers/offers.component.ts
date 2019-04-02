import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public packages = [
    {
      "_id": "5c9f1e3eaa6b2b80b3092919",
      "name": "AMP 'Lite'",
      "price": 199,
      "__v": 0
    },
    {
      "_id": "5c9f1e44aa6b2b80b309291a",
      "name": "AMP 'Pro'",
      "price": 399,
      "__v": 0
    }
  ]
  @Output('plan') selectedPlan: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  selectPlan(plan) {
    setTimeout(() => {
      this.selectedPlan.emit(plan);
    }, 300);
  }

}
