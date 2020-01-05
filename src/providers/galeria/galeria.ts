import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Galeria} from '../../models/galeria';
import { Http, RequestOptions, Headers } from '@angular/http';

/*
  Generated class for the GaleriaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GaleriaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GaleriaProvider Provider');
  }
  obterGaleria(){
    return this.http.get<Galeria[]>('http://localhost:3000/galeria');
  }
  //-teste
  //obterGaleria(){
   // return this.http.get<Galeria[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Galeria');
  ///}
}
