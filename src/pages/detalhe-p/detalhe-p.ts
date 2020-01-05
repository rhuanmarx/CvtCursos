import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import {AtualizaPPage} from '../atualiza-p/atualiza-p';



/**
 * Generated class for the DetalhePPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-p',
  templateUrl: 'detalhe-p.html',
})
export class DetalhePPage {

  public Inscricao;

  constructor(public navParams: NavParams, 
              public navCtrl : NavController, 
              public http : Http) {

    this.Inscricao = navParams.get('InscricaoSelecionado');
    
  }
  //excluirInscricao(){
    //this.http.delete('https://pacific-harbor-95140.herokuapp.com/contatos/' + this.contato.id)
    //this.http.delete('http://localhost:3000/Inscricao/' + this.Inscricao.id)    
   // .map(response => response)
       // .toPromise()
       // .then(response => {
        //                    console.log('Inscricao Excluída com sucesso');
          //                  this.navCtrl.pop();
      //                    }
    //    );
  //}
 excluirInscricao(){
    //this.http.delete('https://pacific-harbor-95140.herokuapp.com/contatos/' + this.contato.id)
    this.http.delete('https://my-json-server.typicode.com/rhuanmarx/CVT/Inscricao/' + this.Inscricao.id)    
    .map(response => response)
       .toPromise()
        .then(response => {
                            console.log('Inscricao Excluída com sucesso');
                            this.navCtrl.pop();
                         }
        );
  }
 
  alteraInscricao(){
    this.navCtrl.push(AtualizaPPage, {Inscricao : this.Inscricao});
  }

}
