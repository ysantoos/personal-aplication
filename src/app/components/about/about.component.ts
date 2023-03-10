import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  skills = [{
    name: '.NET',
    score: 5
  },{
    name: '.NET Framework',
    score: 5
  },{
    name: 'Angular',
    score: 5
  },{
    name: 'Azure',
    score: 3
  },{
    name: 'CSS / SCSS',
    score: 5
  },{
    name: 'DevOps',
    score: 3
  },{
    name: 'Git',
    score: 5
  },{
    name: 'HTML',
    score: 5
  },{
    name: 'Javascript',
    score: 5
  },{
    name: 'Test con Jasmine/Karma',
    score: 4
  },{
    name: 'Test con MSTest',
    score: 4
  },{
    name: 'SCRUM',
    score: 5
  },{
    name: 'SQL Server',
    score: 5
  },{
    name: 'Typescript',
    score: 5
  }
]
}
