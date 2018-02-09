import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { appRoutes } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { JoinComponent } from './components/join/join.component'


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
