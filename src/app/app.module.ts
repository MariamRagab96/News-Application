import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentComponent } from './components/department/department.component';
import { DetailsComponent } from './components/details/details.component';
import { AddRecentComponent } from './components/share/add-recent/add-recent.component';
import { MoreReadingComponent } from './components/share/more-reading/more-reading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DepartmentComponent,
    DetailsComponent,
    AddRecentComponent,
    MoreReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
