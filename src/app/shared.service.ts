import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "http://localhost:61766/api";

  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/department");
  }
  getByIdDep(val: any) {
    return this.http.get(this.ApiUrl + "/department/" + val);
  }
  addDep(val: any) {
    return this.http.post(this.ApiUrl + "/department", val);
  }
  updateDep(val: any) {
    return this.http.put(this.ApiUrl + "/department", val);
  }
  deleteDep(val: any) {
    return this.http.delete(this.ApiUrl + "/department/" + val);
  }

  getEmpList(): Observable<any[]> {
    return this.http.get<any>(this.ApiUrl + "/employee");
  }
  getByIdEmp(val: any) {
    return this.http.get(this.ApiUrl + "/employee/" + val);
  }
  addEmp(val: any) {
    return this.http.post(this.ApiUrl + "/employee", val);
  }
  updateEmp(val: any) {
    return this.http.put(this.ApiUrl + "/employee", val);
  }
  deleteEmp(val: any) {
    return this.http.delete(this.ApiUrl + "/employee/" + val);
  }
}
