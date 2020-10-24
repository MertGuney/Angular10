import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() dep: any;
  departmentID: string;
  departmentName: string;
  ngOnInit(): void {
    this.departmentID = this.dep.departmentID;
    this.departmentName = this.dep.departmentName;
  }
  addDepartment() {
    var val = { departmentID: this.departmentID, departmentName: this.departmentName };
    this.service.addDep(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateDepartment() {
    var val = { departmentID: this.departmentID, departmentName: this.departmentName };
    this.service.updateDep(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
