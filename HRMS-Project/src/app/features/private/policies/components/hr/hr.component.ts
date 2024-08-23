import { Component, OnInit } from '@angular/core';
import { Policy } from '../../models/policy.model';
import { PolicyService } from '../../service/policy.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrl: './hr.component.scss'
})
export class HRComponent implements OnInit{
  hrPolicies : Policy [] = [];

  constructor(private policyServie : PolicyService){}

  ngOnInit(): void {
    this.policyServie.getPolicies('hr').subscribe(data =>{
    this.hrPolicies = data;
    });
  }

}
