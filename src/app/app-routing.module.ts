import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { StudentComponent } from "./student/student.component";
import { StudentDetailComponent} from "./student-detail/student-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "student",
    component: StudentComponent
  },
  {
    path: "studentdetails/:nim",
    component: StudentDetailComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
