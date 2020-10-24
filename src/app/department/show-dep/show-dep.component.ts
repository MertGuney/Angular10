import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }
  DepList: any = [];

  ModalTitle: string;
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  depIdFilter: string = "";
  depNameFilter: string = "";
  depListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }
  addClick() {
    this.dep = {
      departmentId: 0,
      departmentName: ""
    }
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
  }
  editClick(item) {
    this.dep = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }
  closeClick() {
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }
  deleteClick(item) {
    if (confirm('Are you sure ??')) {
      this.service.deleteDep(item.departmentID).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
      });
    }
  }
  refreshDepList() {
    this.service.getDepList().subscribe(data => {
      this.DepList = data;
      this.depListWithoutFilter = data;
    });
  }
  filterFn() {
    var depIdFilter = this.depIdFilter;
    var depNameFilter = this.depNameFilter;
    this.DepList = this.depListWithoutFilter.filter(function (el) {
      return el.departmentID.toString().toLowerCase().includes(
        depIdFilter.toString().trim().toLowerCase()
      ) && el.departmentName.toString().toLowerCase().includes(
        depNameFilter.toString().trim().toLowerCase()
      )
    });
  }
  sortResult(prop,asc){
    this.DepList =this.depListWithoutFilter.sort(function(a,b){
      if(asc){
        return(a[prop]>b[prop])?1:((a[prop]<b[prop]) ?-1:0);
      }else{
        return(b[prop]>a[prop])?1:((b[prop]<a[prop]) ?-1:0);
      }
    })
  }

}
