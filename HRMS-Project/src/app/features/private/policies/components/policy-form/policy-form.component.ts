import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../../service/policy.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Policy } from '../../models/policy.model';
import { Store } from '@ngrx/store';
import { addPolicy, editPolicy } from '../../store/policy-list/policy-list.action';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-policy-form',
  templateUrl: './policy-form.component.html',
  styleUrls: ['./policy-form.component.scss']
})
export class PolicyFormComponent implements OnInit {


  policyFormVal: Policy = { id: 0, title: '', category: '', content: '' };
  policy: Policy = { id: 0, title: '', category: '', content: '' };

  addPolicy: any;
  isEditMode = false;
  id: number | null = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private policyService: PolicyService,
    private router: Router,
    private store: Store,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.isEditMode = true;
      this.policyService.getPolicy(this.id).subscribe((data) => {
        this.policy = data;
      });
    }
  }

  savePolicy(): void {
    console.log(this.isEditMode)
    if (this.isEditMode) {
      const policy = this.generatePayload();
      this.store.dispatch(editPolicy({ policy }))
      // this.policyService.editPolicy('1', this.policy).subscribe(() => {
      // });
    } else {
      this.store.dispatch(addPolicy({ policy: this.policyFormVal }))
      this.policyService.addPolicy(this.policy).subscribe(() => {
        this.router.navigate(['admin/policies/policy-list']);
      });
    }
  }

  generatePayload() : Policy {
    return(
      {
        ...this.policyFormVal,
        id: Number(this.id)
      }
    )
  }
}
