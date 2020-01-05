import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the DetalheRPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-r',
  templateUrl: 'detalhe-r.html',
})
export class DetalheRPage {
public Relatos;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Relatos = navParams.get('RelatoSelecionado');
  }

 

}
