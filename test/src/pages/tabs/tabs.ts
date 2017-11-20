import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Schnitzel } from '../schnitzel/schnitzel';
import { Dickbutt } from '../dickbutt/dickbutt';
import { Kasknoedel } from '../kasknoedel/kasknoedel';
import { ScrollPage } from '../scrollpage/scrollpage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = Schnitzel;
  tab3Root: any = Dickbutt;
  //tab4Root: any = Kasknoedel;
  tab4Root: any = ScrollPage;

  constructor() {

  }
}
