import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contactanos } from './pages/contactanos/contactanos';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contactanos', component: Contactanos },
];
