import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//import do firebase
import {AngularFireAuth} from 'angularfire2/auth';
import{SigninPage} from '../pages/signin/signin';

import { SlidePage } from '../pages/slide/slide';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
//rootPage:any = SigninPage;
rootPage:any;
//rootPage:any = SlidePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, afAuth: AngularFireAuth, storage: Storage) {
    //Função que estava usando para tela de login, atualmente sem uso mas permanece para testes
 const authObserver = afAuth.authState.subscribe(user => {
if (user) {
this.rootPage = TabsPage;
authObserver.unsubscribe();
} else {
 this.rootPage = SigninPage;
authObserver.unsubscribe();
 }  
 })
 
  afAuth.authState.subscribe(user => {
      if (user) {
       this.rootPage = TabsPage;
     } else {
       this.rootPage = SigninPage;
      }
    })
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    // storage.get('slideVisto').then((val) => {
     //  if (val){
      //    this.rootPage = SigninPage;
      // }
       //  else
         //  this.rootPage = SlidePage;
         //});
    });
  }
}
