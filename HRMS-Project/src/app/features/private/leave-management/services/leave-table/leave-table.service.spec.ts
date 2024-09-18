import { TestBed } from '@angular/core/testing';

import { LeaveTableService } from './leave-table.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { resultMemoize } from '@ngrx/store';
import { LeaveTableResponse } from '../../types/leave-table';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';

describe('LeaveTableService', () => {
  let service: LeaveTableService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeaveTableService],
    });
    service = TestBed.inject(LeaveTableService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return leave data in the form of an array using the id', () => {
    
    const mockResponse: LeaveTableResponse = {
      result: 1,
      message: 'success',
      data: [
        {
          leaveFrom: '2024-09-10',
          leaveTo: '2024-09-12',
          leaveType: '3',
          dayLeave: '3',
          reasonForLeave: 'Trip',
          leaveRequestStatus: 'Pending',
        },
        {
          leaveFrom: '2024-09-10',
          leaveTo: '2024-09-12',
          leaveType: '3',
          dayLeave: '3',
          reasonForLeave: 'Trip',
          leaveRequestStatus: 'Pending',
        },
      ],
    };

    service.getLeaveTableData(1).subscribe((response) => {
      expect(response.leaveData).toEqual(mockResponse.data);
      expect(response.leaveData.length).toBe(2);
    })

    const req = httpMock.expectOne(`${baseUrl}${apiConstants.leave.getLeaveRequestByEmpId}?id=1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
