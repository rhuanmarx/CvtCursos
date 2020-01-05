import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the DetalheCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-curso',
  templateUrl: 'detalhe-curso.html',
})
export class DetalheCursoPage {
  public Curso;

  constructor(public navParams: NavParams, 
              public navCtrl : NavController, 
              public http : Http) {

    this.Curso= navParams.get('CursoSelecionado');
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheCursoPage');
  }

}
