import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastragPage } from './cadastrag';

@NgModule({
  declarations: [
    CadastragPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastragPage),
  ],
})
export class CadastragPageModule {}
