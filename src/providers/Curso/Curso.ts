import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from "../../models/Curso";
import { Http, RequestOptions, Headers } from '@angular/http';

/*
  Generated class for the ContatoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoProvider {

  constructor(public http: HttpClient){
   
  console.log('Hello CursoProvider Provider');
  }

 obterCurso(){
   return this.http.get<Curso[]>('http://localhost:3000/Curso');
 }

  //obterCurso(){
  //  return this.http.get<Curso[]>('https://next.json-generator.com/api/json/get/N1u8aRIS8');
 // }
 
 //-Teste-
 //obterCurso(){
   //return this.http.get<Curso[]>('https://my-json-server.typicode.com/rhuanmarx/CVT/Curso');
  //}
 

}
