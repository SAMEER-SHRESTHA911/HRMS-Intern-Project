import { TestBed } from '@angular/core/testing';

import { LeaveApplyApiService } from './leave-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeaveApplyBody } from '../../types/leave-apply';
import { apiConstants } from '@shared/constants/api.constants';
import { baseUrl } from '@shared/constants/global.constants';

fdescribe('LeaveApplyApiService', () => {
  let service: LeaveApplyApiService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [LeaveApplyApiService],
    });
    service = TestBed.inject(LeaveApplyApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send POST request to add leave request and return a response', () => {
    const mockBody : LeaveApplyBody = {
      reasonForLeave: 'Vacation',
      leaveType : '1',
      dayLeave : '3',
      leaveFrom : '2024-09-10',
      leaveTo: '2024-09-12',
    };

    const mockResponse = {
      message : 'Leave request added successfully',
      leaveData: mockBody,
    };

    service.addLeaveRequest(mockBody).subscribe((response) => {
      expect(response.message).toEqual('Leave request added successfully');
      expect(response.leaveData).toEqual(mockBody);
    });

    const req = httpMock.expectOne(`${baseUrl}${apiConstants.leave.addLeaveRequest}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockBody);

    req.flush(mockResponse);
  });
  it('should fetch the data by ID using the GET request', () => {
    
    const mockBody : LeaveApplyBody= {
      reasonForLeave : 'Trip',
      leaveType : '2',
      dayLeave: '2',
      leaveFrom: '2024-09-10',
      leaveTo: '2024-09-11',
    };

    const leaveId = '1';

    service.fetchEditLeaveData(leaveId).subscribe((response) => {
      expect(response).toEqual(mockBody);
    })

    const req = httpMock.expectOne(`${baseUrl}/${leaveId}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockBody);
  })
});
