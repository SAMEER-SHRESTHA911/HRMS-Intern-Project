import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Policy } from '../models/policy.model';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policies: Policy[] = [
    { id: 1, title: 'Annual Leave', content: 'Details about annual leave...', category: 'leave' },
    { id: 2, title: 'Sick Leave', content: 'Details about sick leave...', category: 'leave' },
    { id: 3, title: 'Code of Conduct', content: 'Company code of conduct...', category: 'hr' },
    { id: 4, title: 'Health and Safety', content: 'Company health and safety guidelines...', category: 'company' }
  ];

  getPolicies(category: string): Observable<Policy[]> {
    return of(this.policies.filter(policy => policy.category === category));
  }

  addPolicy(policy: Policy): void {
    this.policies.push({ ...policy, id: this.policies.length + 1 });
  }

  editPolicy(updatedPolicy: Policy): void {
    const index = this.policies.findIndex(policy => policy.id === updatedPolicy.id);
    if (index > -1) {
      this.policies[index] = updatedPolicy;
    }
  }

  deletePolicy(id: number): void {
    this.policies = this.policies.filter(policy => policy.id !== id);
  }
}
