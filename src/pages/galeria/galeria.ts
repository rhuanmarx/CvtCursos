import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import {DetalheGPage} from '../detalhe-g/detalhe-g';
import 'rxjs/add/operator/map';
import { Galeria } from "../../models/Galeria";
import {GaleriaProvider} from "../../providers/galeria/galeria";
import {CadastragPage} from"../cadastrag/cadastrag";
/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {
  Galeria: Galeria[] = [];

  termo : string;

  loadLocal;
  constructor(public navCtrl: NavController, public navParams: NavParams, public load : LoadingController,
    public alert : AlertController,
    private GaleriaProvider : GaleriaProvider, ) {
      this.loadLocal = this.load.create({content:'Aguarde ...'});
      this.loadLocal.present();

}

ionViewWillEnter(){
this.obterGaleriaAPI();
}
adicionarFoto(){
  console.log('Adicionar Sua Foto ...');
  this.navCtrl.push(CadastragPage);
}
selecionaGaleria(x) {
  console.log(x.Foto);
  this.navCtrl.push(DetalheGPage, { GaleriaSelecionado : x } );
}

obterGaleriaAPI() {
  this.GaleriaProvider.obterGaleria()
  .subscribe(response => 
        {
          this.Galeria = response;
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
