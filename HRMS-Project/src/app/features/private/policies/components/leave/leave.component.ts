import { Component } from '@angular/core';
import { PolicyService } from '../../service/policy.service';
import { Policy } from '../../models/policy.model';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
panelOpenState : any

leavePolicies : Policy [] = [];


constructor(private policyService : PolicyService){}

ngOnInit(): void{
  this.policyService.getPolicies('leave').subscribe(data =>{
    this.leavePolicies = data;
  });
}

}
