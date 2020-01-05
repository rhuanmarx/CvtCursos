import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheCursoPage } from './detalhe-curso';

@NgModule({
  declarations: [
    DetalheCursoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheCursoPage),
  ],
})
export class DetalheCursoPageModule {}
