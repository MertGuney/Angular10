import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: SharedService) { }
  EmpList: any = [];

  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }
  addClick() {
    this.emp = {
      employeeId: 0,
      employeeName: "",
      department: "",
      photoFileName: "photo"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }
  editClick(item) {
    console.log(item);
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }
  deleteClick(item) {
    if (confirm('Are you sure ??')) {
      this.service.deleteEmp(item.employeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }
  refreshEmpList() {
    this.service.getEmpList().subscribe(data => {
      this.EmpList = data;
    });
  }
}
