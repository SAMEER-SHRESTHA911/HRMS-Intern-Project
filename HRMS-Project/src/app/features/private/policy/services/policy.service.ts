import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Policy } from "../policy.model";

@Injectable ({
  providedIn : 'root'
})

export class PolicyService {

  constructor(){}

  getPolicies() : Observable<Policy[]>{
    const policies: Policy[] = [
      {title:'Code of conduct' ,
        content: 'hehe'},

      {title:'Office Rules',
        content:'haha'},

      {title:'Dress COde',
        content:'hoho'},

    ]
    return of(policies);
  }

}
