import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common' 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { GistsComponent } from './components/gists/gists.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './components/score/score.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { linkedin, github } from 'ngx-bootstrap-icons';

const icons = {
  linkedin,
  github
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    GistsComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  exports:[
    AboutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
