import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import {DetalheNPage}  from '../detalhe-n/detalhe-n';

import 'rxjs/add/operator/map';
import { Noticia } from "../../models/Noticia";
import { NoticiaProvider } from "../../providers/Noticia/Noticia";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  Noticia : Noticia[] = [];

  termo : string;

  loadLocal;
  /*[
    {'nome' : 'Ana', 'telefone' : '988397858', 'email' : 'ana@gmail.com'},
    {'nome' : 'João', 'telefone' : '988397858', 'email' : 'joao@gmail.com'},
    {'nome' : 'Maria', 'telefone' : '988397858', 'email' : 'maria@gmail.com'}
  ];*/

  constructor(public navCtrl: NavController, 
              public load : LoadingController,
              public alert : AlertController,
              private NoticiaProvider : NoticiaProvider ) {

                this.loadLocal = this.load.create({content:'Aguarde ...'});
                this.loadLocal.present();

  }
  ionViewWillEnter(){
    this.obterNoticiaAPI();
  
  }
  selecionaNoticia(x) {
    console.log(x.Titulo);
   console.log(x.Foto);
    this.navCtrl.push(DetalheNPage, { NoticiaSelecionado : x } );
  }
  obterNoticiaAPI() {
    this.NoticiaProvider.obterNoticia()
    .subscribe(response => 
          {
            this.Noticia = response;
            this.loadLocal.dismiss();
          },
          erro =>
          {
            this.loadLocal.dismiss();
            this.alert.create(
              {
                title : 'Erro na API',
                buttons : [{text : 'Ok'}],
                subTitle : 'Tente novamente mais tarde!'
              }
            ).present();
          }
    );
}


}
