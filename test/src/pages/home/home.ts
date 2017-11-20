import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Schnitzel } from '../schnitzel/schnitzel';
import { Dickbutt } from '../dickbutt/dickbutt';
import { Kasknoedel } from '../kasknoedel/kasknoedel';
import { Pizza } from '../pizza/pizza';
import { ScrollPage } from '../scrollpage/scrollpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    var page;
  }

  pushPage(page) {
    if (page == 1) {
      this.navCtrl.push(Schnitzel);
    }
    if (page == 2) {
      this.navCtrl.push(Dickbutt);
    }
    if (page == 3) {
      this.navCtrl.push(Kasknoedel);
    }
    if (page == 4) {
      this.navCtrl.push(Pizza);
    }
    if (page == 5) {
      this.navCtrl.push(ScrollPage);
    }
  }





  onLink(url: string) {
      window.open(url);
  }
}
