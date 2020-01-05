import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Relatos} from '../../models/Relatos';
/*
  Generated class for the RelatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RelatosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RelatosProvider Provider');
  }
  obterRelatos(){
    return this.http.get<Relatos[]>('http://localhost:3000/Relatos');
  }
 //-teste
 //obterRelatos(){
    //return this.http.get<Relatos[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Relatos');
 // }
  
}
