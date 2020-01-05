import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import {SigninPage } from '../signin/signin';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad HomeSlidePage');
  }

  irAplicativo() {
  	this.storage.set('slideVisto', true);
    //this.navCtrl.push(TabsPage);
  this.navCtrl.push(SigninPage);
  }
 
 
}
