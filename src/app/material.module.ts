import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatListModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule
    ]
  })
  export class MaterialModule {}