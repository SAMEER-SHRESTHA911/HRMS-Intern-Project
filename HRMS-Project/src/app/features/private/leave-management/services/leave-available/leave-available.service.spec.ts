import { TestBed } from '@angular/core/testing';

import { LeaveAvailableService } from './leave-available.service';
import { LeaveBalanceResponse } from '../../types/leave-table';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import { TmplAstBoundEvent } from '@angular/compiler';

fdescribe('LeaveAvailableService', () => {
  let service: LeaveAvailableService;
  let httpMock:  HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [LeaveAvailableService]
    });
    service = TestBed.inject(LeaveAvailableService);
    httpMock =TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide leave data by using employee id', () => {
    
    const mockResponse: LeaveBalanceResponse = {
      result: 1,
      message: 'success',
      data: [
        {
          id: 1,
          employeeId: 1,
          remainingCount: 12,
          totalCount: 0,
          leaveTypeEnum: 'FullDay',
        },
      ],
    };

    service.getLeaveAvailableData(1).subscribe((response) => {
      expect(response.leaveBalanceData.length).toBe(1);
      expect(response.leaveBalanceData[0]).toBe(mockResponse.data[0]);
    })

    const req = httpMock.expectOne(`${baseUrl}${apiConstants.leave.getLeaveBalanceofEmp}?empId=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
    
  });

  it('should return em,pty leave balance if on data is present', () => {
    const mockEmptyResponse : LeaveBalanceResponse = {
      result: 1,
      message: 'success',
      data: [],
    };

    service.getLeaveAvailableData(1).subscribe((response) => {
      expect(response.leaveBalanceData.length).toBe(0);
      expect(response.leaveBalanceData[0]).toEqual(mockEmptyResponse.data[0]);
    })

    const req = httpMock.expectOne(`${baseUrl}${apiConstants.leave.getLeaveBalanceofEmp}?empId=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmptyResponse);
  })
});
