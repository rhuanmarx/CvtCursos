import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Camera, CameraOptions} from "@ionic-native/camera";
/**
 * Generated class for the CadastraPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-p',
  templateUrl: 'cadastra-p.html',
})
export class CadastraPPage {
  Inscricao = {
    Nome : '',
    Email : '',
    DatadeNascimento : '',
    Idade: '',
    Sexo: '',
    Escolaridade: '',
    RuaEndereco: '',
    Cidade: '',
    Municipio: '',
    Telefone: '',
    NomedoPai: '',
    NomedaMae: '',
    CursosEscolhidos: '',
    Foto : ''
  };

  currentPhoto : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http : Http,
              private toastCtrl : ToastController, public camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraPPage');
  }

  getPhoto(type){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {

      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
}

  exibirToast() {
    let toast = this.toastCtrl.create({
      message: 'Inscricao realizada com sucesso!',
      duration: 5000,
      position: 'bottom'
    });
    toast.present(toast);
  }

  cadastrarInscricao(){


    this.Inscricao.Foto = this.currentPhoto;
    console.log("Cadastrando contato: " + this.Inscricao.Nome);
    console.log("Cadastrando contato: " + this.Inscricao.Email);
    console.log("Cadastrando contato: " + this.Inscricao.DatadeNascimento);
    console.log("Cadastrando contato: " + this.Inscricao.Idade);
    console.log("Cadastrando contato: " + this.Inscricao.Sexo);
    console.log("Cadastrando contato: " + this.Inscricao.Escolaridade);
    console.log("Cadastrando contato: " + this.Inscricao.RuaEndereco);
    console.log("Cadastrando contato: " + this.Inscricao.Cidade);
    console.log("Cadastrando contato: " + this.Inscricao.Municipio);
    console.log("Cadastrando contato: " + this.Inscricao.Telefone);
    console.log("Cadastrando contato: " + this.Inscricao.NomedoPai);
    console.log("Cadastrando contato: " + this.Inscricao.NomedaMae);
    console.log("Cadastrando contato: " + this.Inscricao.CursosEscolhidos);
    console.log("Cadastrando contato: " + this.Inscricao.Foto);

    let body = JSON.stringify(this.Inscricao);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
    this.http.post('http://localhost:3000/Inscricao', body, options)    
    .map(res => res.json())
        .toPromise()
        .then(response => {
                            console.log(response);
                            this.exibirToast();
                           this.navCtrl.pop();
                          }
        );
    
    
  }
  //-teste
  //cadastrarInscricao(){


    //this.Inscricao.Foto = this.currentPhoto;
    //console.log("Cadastrando contato: " + this.Inscricao.Nome);
    //console.log("Cadastrando contato: " + this.Inscricao.Email);
    //console.log("Cadastrando contato: " + this.Inscricao.DatadeNascimento);
    //console.log("Cadastrando contato: " + this.Inscricao.Idade);
    //console.log("Cadastrando contato: " + this.Inscricao.Sexo);
    //console.log("Cadastrando contato: " + this.Inscricao.Escolaridade);
    //console.log("Cadastrando contato: " + this.Inscricao.RuaEndereco);
    //console.log("Cadastrando contato: " + this.Inscricao.Cidade);
    //console.log("Cadastrando contato: " + this.Inscricao.Municipio);
    //console.log("Cadastrando contato: " + this.Inscricao.Telefone);
    //console.log("Cadastrando contato: " + this.Inscricao.NomedoPai);
    //console.log("Cadastrando contato: " + this.Inscricao.NomedaMae);
    //console.log("Cadastrando contato: " + this.Inscricao.CursosEscolhidos);
    //console.log("Cadastrando contato: " + this.Inscricao.Foto);

//    let body = JSON.stringify(this.Inscricao);
  //  let headers = new Headers({'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });

    //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
    //this.http.post('https://my-json-server.typicode.com/rhuanmarx/CVT/Inscricao', body, options)    
    //.map(res => res.json())
     //   .toPromise()
       // .then(response => {
        //                    console.log(response);
          //                  this.exibirToast();
            //                this.navCtrl.pop();
             //             }
       // );
    
    
  //}

}
