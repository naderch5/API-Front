import { TeamComponent } from './team/team.component';

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { WhyComponent } from './why/why.component';
export const routes: Routes = [
  {path: '',    pathMatch: 'full',
  redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'team',component:TeamComponent},
  {path:'why',component:WhyComponent}


];
