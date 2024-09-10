import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Policy } from '../../models/policy.model';
import { PolicyState } from '../../store/policy-list/policy-list.state';
import * as PolicyActions from '../../store/policy-list/policy-list.action';
import * as fromPolicy from '../../store/policy-list/policy-list.selector';
import { Router } from '@angular/router';
import { selectAllPolicies } from '../../store/policy-list/policy-list.selector';


@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {
  policies$: Observable<Policy[] | undefined> = of(undefined);
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;


  constructor(private store: Store<PolicyState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(PolicyActions.loadPolicies());
    this.policies$ = this.store.select(selectAllPolicies);
    this.policies$.subscribe((response) => console.log("policyData",response))
    this.loading$ = this.store.select(fromPolicy.selectPolicyLoading);
    this.error$ = this.store.select(fromPolicy.selectPolicyError);
  }

  editPolicy(id: number): void {
    this.router.navigate(['admin/policies/edit-policy', id]);
  }

  deletePolicy(id: number): void {
    this.store.dispatch(PolicyActions.deletePolicy({ id }));
  }

  routeToPolicyForm(): void {
    this.router.navigate(['admin/policies/policy-form']);
  }
}
