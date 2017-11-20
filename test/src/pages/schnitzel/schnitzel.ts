import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Schnitzel2 } from '../schnitzel2/schnitzel2'

@Component({
  selector: 'page-schnitzel',
  templateUrl: 'schnitzel.html'
})
export class Schnitzel {

  constructor(public navCtrl: NavController) {
    var page;
  }

  pushPage(page) {
    if (page == 1) {
      this.navCtrl.push(Schnitzel2);
    }
    if (page == 2) {
      this.navCtrl.push(Schnitzel2);
    }
    if (page == 3) {
      this.navCtrl.push(Schnitzel2);
    }
  }
  
  onLink(url: string) {
      window.open(url);
  }

}
