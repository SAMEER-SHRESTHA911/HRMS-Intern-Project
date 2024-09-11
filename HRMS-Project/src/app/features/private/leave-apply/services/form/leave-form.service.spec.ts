import { TestBed } from '@angular/core/testing';

import { LeaveFormService } from './leave-form.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LeaveApplyBody } from '../../types/leave-apply';

describe('LeaveFormService', () => {
  let service: LeaveFormService;
  let httpMock: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [LeaveFormService, FormBuilder],
    });
    service = TestBed.inject(LeaveFormService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the form with the required controls', () => {
    service.buildForm();
    const form = service.form;
    expect(form).toBeTruthy();
    expect(form?.controls['reasonForLeave']).toBeTruthy();
    expect(form?.controls['leaveType']).toBeTruthy();
    expect(form?.controls['dayLeave']).toBeTruthy();
    expect(form?.controls['leaveFrom']).toBeTruthy();
    expect(form?.controls['leaveTo']).toBeTruthy();
  });

  it('should toggle edit mode correctly', () => {
    expect(service.getEditMode()).toBe(false);

    service.changeEditMode();
    expect(service.changeEditMode()).toBe(true);

    service.resetEditMode();
    expect(service.resetEditMode()).toBe(false);
  });

  it('should patch from with fetched data', () => {
    const form = new FormBuilder().group({
      reasonForLeave: [''],
      leaveType: [''],
      leaveFrom: [''],
      leaveTo: [''],
      dayLeave: [''],
    });

    const mockData: LeaveApplyBody = {
      reasonForLeave: 'Personal Leave',
      leaveType: '3',
      leaveFrom: new Date('Tue Sep 10 2024 05:45:00 GMT+0545') as any,
      leaveTo: new Date('Tue Sep 12 2024 05:45:00 GMT+0545') as any,
      dayLeave: '3',
    };

    service.patchData(form, mockData);

    expect(form?.value).toEqual({
      reasonForLeave: mockData.reasonForLeave,
      leaveType: mockData.leaveType.toString(),
      leaveFrom : mockData.leaveFrom as any,
      leaveTo : mockData.leaveTo as any,
      dayLeave: mockData.dayLeave.toString(),
    });
  });
});
