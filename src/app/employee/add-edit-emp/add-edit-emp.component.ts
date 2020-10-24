import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() emp: any;
  employeeId: string;
  employeeName: string;
  department: string;
  dateOfJoining:string;
  depList: any = [];

  ngOnInit(): void {
    this.loadDepList();
  }
  loadDepList() {
    this.service.getDepList().subscribe((data: any) => {
      this.depList = data;
      this.employeeId = this.emp.employeeId;
      this.employeeName = this.emp.employeeName;
      this.department = this.emp.department;
      this.dateOfJoining =this.emp.dateOfJoining;
    });
  }


  addEmployee() {
    var val = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      department: this.department
    };
    this.service.addEmp(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateEmployee() {
    var val = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      department: this.department,
      dateOfJoining:this.dateOfJoining
    };
    this.service.updateEmp(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
