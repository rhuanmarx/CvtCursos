import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscricao } from "../../models/Inscricao";
/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InscricaoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InscricaoProvider Provider');
  }

 obterInscricao(){
   return this.http.get<Inscricao[]>('http://localhost:3000/Inscricao');
 }

 // obterInscricao(){
  //  return this.http.get<Inscricao[]>(' https://projetocentec2018.firebaseio.com/Inscricao');
  // }
 
  //-teste
  //obterInscricao(){
    //return this.http.get<Inscricao[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Inscricao');
 // }
  
}
