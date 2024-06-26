import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000';
  private userId: any;
  private firstName: any;
  private lastName: any;
  
  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    var requestURL=this.apiUrl.concat("/user-info")
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(requestURL, { headers });
  }

  getAllSems(): Observable<any>{
    var requestURL=this.apiUrl.concat("/get-sems")
    return this.http.get<any[]>(requestURL)
  }

  getAllProfs(): Observable<any>{
    var requestURL=this.apiUrl.concat("/get-profs")
    return this.http.get<any[]>(requestURL)
  }

  getAllEnrollments(): Observable<any>{
    var requestURL=this.apiUrl.concat("/get-enrollments")
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(requestURL, { headers });
  }

  setUserID(id:any){
    this.userId=id;
  }
  
  getUserID(){
    return this.userId;
  }

  setfirstName(firstName:any){
    this.firstName=firstName;
  }
  
  getFirstName(){
    return this.firstName;
  }

  setLastName(lastName:any){
    this.lastName=lastName;
  }
  
  getLastName(){
    return this.lastName;
  }
}
