import { Component, Injector } from '@angular/core';

import { NavController } from 'ionic-angular';

import Dynamicfunctions from '../dynamicrecepie/dynamicfunctions';

@Component({
  selector: 'page-dynamicrecepie',
  //templateUrl: 'dynamicrecepie.html'
  //template: '<ion-card><div><img src="{{imgData}}"/><span>Kasknödel</span></div></ion-card>',
  template: '<ion-card><div><img src="https://static.chefkoch-cdn.de/ck.de/rezepte/258/258842/934646-960x720-tiroler-kaskn-del.jpg"/><span>Kasknödel</span></div></ion-card>',

})

export default class Dynamicrecepie {
  imgData = "";

  constructor(private injector: Injector, public navCtrl: NavController) {

    //this.imgData = this.injector.get('imgData');

  }
}

