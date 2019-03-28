import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { DataService } from "./data.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent, 
    StudentComponent, 
    StudentDetailComponent, 
    DashboardComponent, 
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
