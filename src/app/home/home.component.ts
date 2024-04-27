import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { WhyComponent } from '../why/why.component';
import { ServiceComponent } from '../service/service.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,WhyComponent,ServiceComponent,TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
