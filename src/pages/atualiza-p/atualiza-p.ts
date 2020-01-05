import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from "@angular/http";
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the AtualizaPPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-p',
  templateUrl: 'atualiza-p.html',
})
export class AtualizaPPage {

  Inscricao;
  currentPhoto : any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http : Http, public camera : Camera ) {

    this.Inscricao = navParams.get('Inscricao');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AtualizaPPage');
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
 alteraInscricao(){
   this.Inscricao.Foto = this.currentPhoto;
    
    let body = JSON.stringify(this.Inscricao);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

   this.http.put('http://localhost:3000/Inscricao/' + this.Inscricao.id, body, options)
         .map(res => res.json())
        .toPromise()
        .then(response => {
                            console.log(response);
                            this.navCtrl.pop();
                          }
        );

  }
  //-teste
  //alteraInscricao(){
    //this.Inscricao.Foto = this.currentPhoto;
    
   // let body = JSON.stringify(this.Inscricao);
    //let headers = new Headers({'Content-Type': 'application/json'});
    //let options = new RequestOptions({ headers: headers });

//    this.http.put('https://my-json-server.typicode.com/rhuanmarx/CVT/Inscricao/' + this.Inscricao.id, body, options)
 //        .map(res => res.json())
  //      .toPromise()
   //     .then(response => {
    //                        console.log(response);
     //                       this.navCtrl.pop();
      //                    }
       // );

 // }
}
