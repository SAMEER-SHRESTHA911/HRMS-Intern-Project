import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PolicyService{

private apiUrl ='';
  constructor(private http:HttpClient){}

getPolicies():Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/policies`);
}
getPolicy(id:string):Observable<any[]>{
  return this.http.get<any>(`${this.apiUrl}/policies/${id}`);
}
addPolicy(policy:any):Observable<any>{
  return this.http.post<any>(`${this.apiUrl}/policies`,policy);
}
updatePolicy(id:string,policy:any):Observable<any>{
  return this.http.put<any>(`${this.apiUrl}/policies/${id}`,policy);
}
deletePolicy(id:string):Observable<any>{
  return this.http.delete<any>(`${this.apiUrl}/policies/${id}`);
}
}

