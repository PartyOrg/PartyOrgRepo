import { NgModule, ErrorHandler, ComponentFactoryResolver, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { RouterModule, Routes } from '@angular/router';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Schnitzel } from '../pages/schnitzel/schnitzel';
import { Dickbutt } from '../pages/dickbutt/dickbutt';
import { Kasknoedel } from '../pages/kasknoedel/kasknoedel';
import { Pizza } from '../pages/pizza/pizza';
import { Schnitzel2 } from '../pages/schnitzel2/schnitzel2';
import { TabsPage } from '../pages/tabs/tabs';
import { ScrollPage } from '../pages/scrollpage/scrollpage';
import Dynamicrecepie from '../pages/dynamicrecepie/dynamicrecepie';
import Dynamiccomponents from '../pages/dynamicrecepie/dynamiccomponents';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Schnitzel,
    Dickbutt,
    Kasknoedel,
    Pizza,
    Schnitzel2,
    TabsPage,
    ScrollPage,
    Dynamicrecepie,
    Dynamiccomponents
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Schnitzel,
    Dickbutt,
    Kasknoedel,
    Pizza,
    Schnitzel2,
    TabsPage,
    ScrollPage,
    Dynamicrecepie
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
