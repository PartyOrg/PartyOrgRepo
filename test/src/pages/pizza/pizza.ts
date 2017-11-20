import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html'
})
export class Pizza {

  constructor(public navCtrl: NavController) {

  }

  onLink(url: string) {
    window.open(url);
  }

}
