import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { PoliciesComponent } from '../../policies.component';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.scss'
})
export class PolicyListComponent implements OnInit {
  policies : Policy[]= [{
    id : "string",
    category: 'string',
    title : 'string',
    content : 'string'
    }];
  panelOpenState: any

  constructor(private policyService:PolicyService){}

  ngOnInit(): void {
      this.policyService.getPolicies().subscribe(data=>{
        this.policies=data;
      });
  }

deletePolicy(id:string):void{
  this.policyService.deletePolicy(id).subscribe(()=>{
    this.policies=this.policies.filter(policy=>policy.id!=id);
  });
}
}
