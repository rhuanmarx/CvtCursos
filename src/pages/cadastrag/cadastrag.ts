import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import {Camera, CameraOptions} from "@ionic-native/camera";
/**
 * Generated class for the CadastragPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrag',
  templateUrl: 'cadastrag.html',
})
export class CadastragPage {
  
  Galeria = {
    Foto : ''
  };
  
  currentPhoto : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http : Http,
              private toastCtrl : ToastController, public camera : Camera) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastragPage');
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
      message: 'Foto Salva com sucesso!',
      duration: 5000,
      position: 'bottom'
    });
    toast.present(toast);
  }
  
  cadastraFoto(){
    
    this.Galeria.Foto = this.currentPhoto;
    console.log("Adcionar Sua Foto: " + this.Galeria.Foto);

    let body = JSON.stringify(this.Galeria);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
    this.http.post('http://localhost:3000/galeria', body, options)    
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
  //cadastraFoto(){
    
    //this.Galeria.Foto = this.currentPhoto;
    //console.log("Adcionar Sua Foto: " + this.Galeria.Foto);

    //let body = JSON.stringify(this.Galeria);
    //let headers = new Headers({'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });

    //this.http.post('https://pacific-harbor-95140.herokuapp.com/contatos', body, options)
    //this.http.post('https://my-json-server.typicode.com/rhuanmarx/CVT/Galeria', body, options)    
    //.map(res => res.json())
     //   .toPromise()
      //  .then(response => {
        //                    console.log(response);
          //                  this.exibirToast();
           //                 this.navCtrl.pop();
            //              }
       // );
    
    
  //}
  
}
