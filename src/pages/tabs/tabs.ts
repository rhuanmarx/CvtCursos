import { Component } from '@angular/core'
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {CvtPage} from '../cvt/cvt'; 
import {GaleriaPage} from '../galeria/galeria';
import {RelatosPage} from '../relatos/relatos';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 
  tab1Root = CvtPage;
  tab2Root = AboutPage;
  tab3Root = HomePage;
tab4Root = GaleriaPage;
tab5Root = RelatosPage;
  tab6Root = ContactPage;

  constructor() {

  }
}
