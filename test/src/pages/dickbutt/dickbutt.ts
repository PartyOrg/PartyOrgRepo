import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dickbutt',
  templateUrl: 'dickbutt.html'
})
export class Dickbutt {

  constructor(public navCtrl: NavController) {
    
  }

  onLink(url: string) {
      window.open(url);
  }

}
