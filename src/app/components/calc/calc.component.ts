import { Component, OnInit } from "@angular/core";

//Packages
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent implements OnInit {
  result: number = null;
  num1: number;
  num2: number;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  add(num1, num2): void {
    this.checkForErrors(num1, num2);
    this.result = num1 + num2;
    this.num1 = null;
    this.num2 = null;
  }

  subtract(num1, num2): void {
    this.checkForErrors(num1, num2);
    this.result = num1 - num2;
    this.num1 = null;
    this.num2 = null;
  }

  multiply(num1, num2): void {
    this.checkForErrors(num1, num2);
    this.result = num1 * num2;
    this.num1 = null;
    this.num2 = null;
  }

  divison(num1, num2): void {
    this.checkForErrors(num1, num2);
    this.result = num1 / num2;
    this.num1 = null;
    this.num2 = null;
  }

  clear(): void {
    this.num1 = null;
    this.num2 = null;
    this.result = null;
  }

  checkForErrors(num1, num2): void {
    if (num1 == null || num2 == null) {
      this.toastr.error("Please enter valid numbers", "Cannot calculate");
    }
  }
}
