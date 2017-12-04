//import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Component, ComponentFactoryResolver, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';

import { HomePage } from '../pages/home/home';
import { Schnitzel } from '../pages/schnitzel/schnitzel';
import { Dickbutt } from '../pages/dickbutt/dickbutt';
import { Kasknoedel } from '../pages/kasknoedel/kasknoedel';
import { Pizza } from '../pages/pizza/pizza';
import { TabsPage } from '../pages/tabs/tabs';
import { ScrollPage } from '../pages/scrollpage/scrollpage';
import Dynamicfunctions from '../pages/dynamicrecepie/dynamicfunctions';
import Dynamiccomponents from '../pages/dynamicrecepie/dynamiccomponents';

@Component({
  templateUrl: 'app.html'
})

  
  export class MyApp {
  //rootPage = HomePage
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}


/*
export class MyApp implements OnInit, AfterViewChecked {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  //rootPage = HomePage
  rootPage = TabsPage;

  private scrollExecuted: boolean = false;

  constructor(platform: Platform, private activatedRoute: ActivatedRoute) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  ngAfterViewChecked() {

    if (!this.scrollExecuted) {
      let routeFragmentSubscription: Subscription;

      // Automatic scroll
      routeFragmentSubscription =
        this.activatedRoute.fragment
          .subscribe(fragment => {
            if (fragment) {
              let element = document.getElementById(fragment);
              if (element) {
                element.scrollIntoView();

                this.scrollExecuted = true;

                // Free resources
                setTimeout(
                  () => {
                    console.log('routeFragmentSubscription unsubscribe');
                    routeFragmentSubscription.unsubscribe();
                  }, 1000);

              }
            }
          });
    }

  }
}
*/
