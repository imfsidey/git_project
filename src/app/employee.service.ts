import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './employees';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  private _url:string = "/assets/data/employees.json"

  constructor(private http:HttpClient) { }

getEmployees():Observable<Iemployee[]>{

  return this.http.get<Iemployee[]>(this._url)

}





}
