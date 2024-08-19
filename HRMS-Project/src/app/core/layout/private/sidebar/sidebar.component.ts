import { Component } from '@angular/core';
import { ADD_NEW_EMPLOYEES, APPLY_FOR_LEAVE, ATTENDANCE, EDIT_EMPLOYEE_DETAILS, EMPLOYEE_DETAILS, LEAVE_APPLICATION_STATUS, POLICIES, REMOVE_EMPLOYEES } from '../../../../shared/constants/routes.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = true;

  readonly LEAVE_APPLICATION_STATUS = LEAVE_APPLICATION_STATUS;
  readonly APPLY_FOR_LEAVE = APPLY_FOR_LEAVE;
  readonly ADD_NEW_EMPLOYEES = ADD_NEW_EMPLOYEES;
  readonly REMOVE_EMPLOYEES = REMOVE_EMPLOYEES;
  readonly EDIT_EMPLOYEE_DETAILS = EDIT_EMPLOYEE_DETAILS;
  readonly POLICIES =  POLICIES;
  readonly EMPLOYEE_DETAILS = EMPLOYEE_DETAILS;
  readonly ATTENDANCE = ATTENDANCE;
}
