import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconService } from './shared/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  mobileQuery: MediaQueryList;
  nav = [{
    icon: 'add_reaction',
    name: 'About me',
    path: 'about'
  },
  {
    icon: 'work',
    name: 'Experience',
    path: 'experience'
  },
  {
    icon: 'code',
    name: 'Gists',
    path: 'gists'
  }]


  constructor(private media: MediaMatcher, private iconService : IconService) {}

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this.iconService.registerIcons();
  }
}
