import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Student } from "../student";
import { DataService } from "../data.service";

@Component({
  selector: "app-student-detail",
  templateUrl: "./student-detail.component.html",
  styleUrls: ["./student-detail.component.css"]
})
export class StudentDetailComponent implements OnInit {
  //buat penampung untuk parameter
  nim: number = null;
  student: Student = null;
  //terima paramater yang dioper
  constructor(private route: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    //telusuri semua parameter yang diberikan
    this.route.paramMap.subscribe(element => {
      //cari apakah ada parameter yang namanya "nim"
      this.nim = +element.get("nim"); //convert string to number
      console.log(this.nim);

      this.student = this.dataService.getStudent(this.nim);
    });
  }
}
