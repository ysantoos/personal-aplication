import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  mobileQuery: MediaQueryList;
  nav = [{
    icon: 'add_reaction',
    name: 'Sobre mi',
    path: 'about'
  },
  {
    icon: 'work',
    name: 'Experiencia',
    path: 'experience'
  },
  {
    icon: 'code',
    name: 'Gists',
    path: 'gists'
  }]


  constructor(private media: MediaMatcher) {
    
  }

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    
  }
}
