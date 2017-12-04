import { Component, NgModule } from '@angular/core'

import { NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser'
import Dynamicrecepie from '../pages/dynamicrecepie/dynamicrecepie';
import Dynamiccomponents from '../pages/dynamicrecepie/dynamiccomponents';

@Component({
  entryComponents: [Dynamicrecepie]
})

export default class Dynamicfunctions {
  componentData = null;

  createRecepie() {
    this.componentData = {
      component: Dynamicrecepie,
      inputs: {
        imgData: "https://static.chefkoch-cdn.de/ck.de/rezepte/258/258842/934646-960x720-tiroler-kaskn-del.jpg"
      }
    };
  }

  
}
