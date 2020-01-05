import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from "@angular/http";
/**
/**
 * Generated class for the DetalheNPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-n',
  templateUrl: 'detalhe-n.html',
})
export class DetalheNPage {
  public Noticia;

  constructor(public navParams: NavParams, 
              public navCtrl : NavController, 
              public http : Http) {

    this.Noticia= navParams.get('NoticiaSelecionado');
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheNPage');
  }

}
