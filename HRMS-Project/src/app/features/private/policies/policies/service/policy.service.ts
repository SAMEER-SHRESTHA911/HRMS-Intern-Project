import { Injectable } from "@angular/core";
import { Policy } from "../model/policy.model";

@Injectable ({

  providedIn : 'root'
})

export class PoliciesService {
  private policies : Policy [] = [
    { id: 1, title: 'Annual Leave', content: 'Details about annual leave...', category: 'leave' },
    { id: 1, title: 'Sick Leave', content: 'Details about Sick Leave...', category: 'leave' },
    { id: 1, title: 'Code of Conduct', content: 'Details about Code of conduct...', category: 'hr' },
    { id: 1, title: 'Health and Saftey', content: 'Details about health and saftey...', category: 'company' },
  ];

  
  }



