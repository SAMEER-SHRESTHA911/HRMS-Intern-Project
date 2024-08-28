import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { PoliciesComponent } from '../../policies.component';
import { Policy } from '../../models/policy.model';
import { Router } from '@angular/router';

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

  constructor(private policyService:PolicyService , private router: Router) { }


  ngOnInit(): void {
      this.policyService.getPolicies().subscribe(data=>{
        this.policies=data;
      });
  }
  editPolicy(id:string):void{
    this.router.navigate(['admin/policies/edit-policy', id]);
  }

  deletePolicy(id:string):void{
  this.policyService.deletePolicy(id).subscribe(()=>{
    this.policies=this.policies.filter(policy=>policy.id!=id);
  });
 }
 routeToPolicyForm(){
  this.router.navigate(['admin/policies/policy-form']);
}
}
