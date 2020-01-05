import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import {DetalheCursoPage}  from '../detalhe-curso/detalhe-curso'
import {CadastraPPage} from '../cadastra-p/cadastra-p';

import 'rxjs/add/operator/map';
import { Curso } from "../../models/Curso";
import { CursoProvider } from "../../providers/Curso/Curso";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Curso : Curso[] = [];

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
              private CursoProvider : CursoProvider ) {

                this.loadLocal = this.load.create({content:'Aguarde ...'});
                this.loadLocal.present();

  }
  ionViewWillEnter(){
    this.obterCursoAPI();
  
  }
  selecionaCurso(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    this.navCtrl.push(DetalheCursoPage, { CursoSelecionado : x } );
  }
  adicionaInscricao(){
    console.log('Adicionando Inscricao ...');
    this.navCtrl.push(CadastraPPage);
  }
  obterCursoAPI() {
    this.CursoProvider.obterCurso()
    .subscribe(response => 
          {
            this.Curso = response;
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
