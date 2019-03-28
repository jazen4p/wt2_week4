import { Component, OnInit, Input } from "@angular/core";
import { Student } from "../student";
import { DataService } from "../data.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  students: Array<Student> = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.students = this.dataService.getStudents();
  }
}
