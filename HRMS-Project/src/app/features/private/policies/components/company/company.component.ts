import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent implements OnInit{
  companyPolicies : Policy [] = [];

  constructor(private policyService : PolicyService){}

  ngOnInit(): void {
    this.policyService.getPolicies('company').subscribe(data=>{
      this.companyPolicies = data;
    });
  }

}
