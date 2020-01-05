import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';

import {DetalheRPage}  from '../detalhe-r/detalhe-r';
import {CadastraRPage} from '../cadastra-r/cadastra-r';


import 'rxjs/add/operator/map';
import { Relatos } from "../../models/Relatos";
import {RelatosProvider} from "../../providers/relatos/relatos";
/**
 * Generated class for the RelatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatos',
  templateUrl: 'relatos.html',
})
export class RelatosPage {
  Relatos: Relatos[] = [];

  termo : string;

  loadLocal;
  constructor(public navCtrl: NavController, public navParams: NavParams, public load : LoadingController,
    public alert : AlertController,
    private RelatosProvider : RelatosProvider, ) {
      this.loadLocal = this.load.create({content:'Aguarde ...'});
      this.loadLocal.present();

}

ionViewWillEnter(){
this.obterRelatosAPI();
}

selecionaRelato(x) {
  console.log(x.Nome);
  console.log(x.Foto);
  this.navCtrl.push(DetalheRPage, { RelatoSelecionado : x } );
}
adicionarRelato(){
  console.log('Adicionar Relato ...');
  this.navCtrl.push(CadastraRPage);
}
obterRelatosAPI() {
  this.RelatosProvider.obterRelatos()
  .subscribe(response => 
        {
          this.Relatos = response;
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
