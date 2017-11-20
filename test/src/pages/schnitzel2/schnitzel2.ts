import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-schnitzel2',
  templateUrl: 'schnitzel2.html'
})
export class Schnitzel2 {

  constructor(public navCtrl: NavController) {
    
  }

  onLink(url: string) {
      window.open(url);
  }

}
