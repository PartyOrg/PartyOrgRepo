import { Component, Injector, ViewChild } from '@angular/core';

import { NavController, Content } from 'ionic-angular';
import { Schnitzel } from '../schnitzel/schnitzel';
import { Dickbutt } from '../dickbutt/dickbutt';
import { Kasknoedel } from '../kasknoedel/kasknoedel';
import { Pizza } from '../pizza/pizza';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-scrollpage',
  templateUrl: 'scrollpage.html'
})
export class ScrollPage {
  @ViewChild(Content) content: Content;
  @ViewChild('target') target: any;

  constructor(public navCtrl: NavController) {
    var page;
    var id;
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

  public scrollElement(id) {
    //this.content.scrollTo(0, this.target.nativeElement.offsetTop, 500);
    //this.content.scrollTo(0, 400, 500);

    switch (id)
    {
      case 'card1': this.content.scrollTo(0, 800, 1000); break;
      case 'card2': this.content.scrollTo(0, 800, 1000); break;
      case 'card3': this.content.scrollTo(0, 800, 1000); break;
      case 'card4': this.content.scrollTo(0, 800, 1000); break;
      case 'card5': this.content.scrollTo(0, 800, 1000); break;
      default: break;
    }
  }

  onLink(url: string) {
      window.open(url);
  }
}
