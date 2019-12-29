import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  individual: string = 'Individual';
  hoard: string = '';
  name: string = '';
  isToggled: boolean = false;

  constructor() {}

  toggle() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.individual = '';
      this.hoard = 'Hoard';
    } else {
      this.individual = 'Individual';
      this.hoard = '';
    }
  }

}
