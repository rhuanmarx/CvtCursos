import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {CvtPage} from '../pages/cvt/cvt';
import {DetalheCursoPage } from '../pages/detalhe-curso/detalhe-curso';
import {DetalheNPage} from '../pages/detalhe-n/detalhe-n'; 
import {DetalhePPage} from '../pages/detalhe-p/detalhe-p';
import {CadastraPPage} from '../pages/cadastra-p/cadastra-p';
import {AtualizaPPage} from '../pages/atualiza-p/atualiza-p';
import {SlidePage} from '../pages/slide/slide';
import {GaleriaPage} from '../pages/galeria/galeria';
import {RelatosPage} from '../pages/relatos/relatos';
import {DetalheGPage} from '../pages/detalhe-g/detalhe-g';
import {DetalheRPage} from '../pages/detalhe-r/detalhe-r';
import {CadastraRPage} from '../pages/cadastra-r/cadastra-r';
import {CadastragPage} from '../pages/cadastrag/cadastrag';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { CursoProvider } from '../providers/Curso/Curso';
import {NoticiaProvider} from '../providers/Noticia/Noticia';
import {InscricaoProvider} from '../providers/Inscricao/Inscricao';
import { HttpClientModule } from "@angular/common/http";
import { FiltroPipe } from "../pipes/filtro/filtro";

import {Camera} from '@ionic-native/camera';
//import {Camera} from '@ionic-native/camera/ngx';

import { SigninPage } from '../pages/signin/signin';
import { SigninwithemailPage } from '../pages/signinwithemail/signinwithemail';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';


import { AuthService } from '../providers/auth/auth-service';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';
import { RelatosProvider } from '../providers/relatos/relatos';
import { GaleriaProvider } from '../providers/galeria/galeria';


//se quiser usar outra base de dados, basta trocar esse const por qualquer um que é gerado no firebase, que funciona!!!
const firebaseConfig = {
  apiKey: "AIzaSyD0BJs6BhLGomXN67zd63wMkh9pE1nfS9g",
    authDomain: "projetocentec2018.firebaseapp.com",
    databaseURL: "https://projetocentec2018.firebaseio.com",
    projectId: "projetocentec2018",
   storageBucket: "projetocentec2018.appspot.com",
    messagingSenderId: "1029371555023"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CvtPage,
    DetalheCursoPage,
    FiltroPipe, 
    DetalheNPage,
    AtualizaPPage,
    CadastraPPage,
    DetalhePPage,
    SigninPage,
  SigninwithemailPage,
    SignupPage,
    ResetpasswordPage,
    SlidePage,
    GaleriaPage,
    RelatosPage,
    DetalheGPage,
    DetalheRPage,
    CadastraRPage,
    CadastragPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
   AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CvtPage,
    DetalheCursoPage,
    DetalheNPage,
    AtualizaPPage,
    CadastraPPage,
    DetalhePPage,
    SigninPage,
    SigninwithemailPage,
      SignupPage,
      ResetpasswordPage,
      SlidePage,
      GaleriaPage,
      RelatosPage,
      DetalheGPage,
      DetalheRPage,
      CadastraRPage,
      CadastragPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CursoProvider,
    NoticiaProvider,
    InscricaoProvider,
    AuthService,
    AngularFireModule,
    AngularFireDatabase,
    RelatosProvider,
    GaleriaProvider
  ]
})
export class AppModule {}
