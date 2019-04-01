import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManualComponent implements OnInit {
  public stepOne = {
    phone: '',
    email: '',
    address: '',
    officeHours: "",
    docNames: ''
  }
  selectedTab: number = 0;

  constructor(public loc: Location) { }

  ngOnInit() {
  }

  toStep(which) {
    this.selectedTab = which;
  }

  previous() {
    if (this.selectedTab > 0) {
      this.selectedTab--;
    } else {
      this.loc.back()
    }
  }

}
