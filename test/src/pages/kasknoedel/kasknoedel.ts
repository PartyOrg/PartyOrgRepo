import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-kasknoedel',
  templateUrl: 'kasknoedel.html'
})
export class Kasknoedel {

  constructor(public navCtrl: NavController) {
    
  }

  onLink(url: string) {
      window.open(url);
  }

}
