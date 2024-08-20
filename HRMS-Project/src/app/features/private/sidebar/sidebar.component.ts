import { Component } from '@angular/core';
// import { ADD_NEW_EMPLOYEES, APPLY_FOR_LEAVE, ATTENDANCE, EDIT_EMPLOYEE_DETAILS, EMPLOYEE_DETAILS, LEAVE_APPLICATION_STATUS, POLICIES, REMOVE_EMPLOYEES } from '../../../../shared/constants/routes.constant';
import { ROUTE_CONSTANT } from '../../../shared/constants/routes.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = true;

  route_constant = ROUTE_CONSTANT;
}
