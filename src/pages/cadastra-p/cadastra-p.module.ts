import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraPPage } from './cadastra-p';

@NgModule({
  declarations: [
    CadastraPPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraPPage),
  ],
})
export class CadastraPPageModule {}
