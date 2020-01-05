import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import {DetalhePPage}  from '../detalhe-p/detalhe-p';

import 'rxjs/add/operator/map';
import { Inscricao } from "../../models/Inscricao";
import { InscricaoProvider } from "../../providers/Inscricao/Inscricao";

import {AuthService} from '../../providers/auth/auth-service';
import {SigninPage} from '../signin/signin';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  Inscricao: Inscricao[] = [];

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
              private InscricaoProvider : InscricaoProvider,  private authService: AuthService,  private toastCtrl : ToastController ) {

                this.loadLocal = this.load.create({content:'Aguarde ...'});
                this.loadLocal.present();

  }

  ionViewWillEnter(){
    this.obterInscricaoAPI();
  }

  selecionaInscricao(x) {
    console.log(x.Nome);
    console.log(x.Foto);
    this.navCtrl.push(DetalhePPage, { InscricaoSelecionado : x } );
  }
  exibirToast() {
    let toast = this.toastCtrl.create({
      message: 'Volte Sempre!!!',
      duration: 5000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  signOut(){
    this.authService.signOut()
    .then(() =>{
      this.navCtrl.parent.parent.setRoot(SigninPage);
      this.exibirToast();
    })
    .catch((error) =>{
      console.error(error);
    });
    }

  obterInscricaoAPI() {
        this.InscricaoProvider.obterInscricao()
        .subscribe(response => 
              {
                this.Inscricao = response;
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
