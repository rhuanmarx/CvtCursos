import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePPage } from './detalhe-p';

@NgModule({
  declarations: [
    DetalhePPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePPage),
  ],
})
export class DetalhePPageModule {}
