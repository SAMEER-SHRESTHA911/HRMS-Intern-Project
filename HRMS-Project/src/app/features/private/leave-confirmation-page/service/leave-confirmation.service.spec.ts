import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LeaveConfirmationService } from './leave-confirmation.service';
import { baseUrl } from '@shared/constants/global.constants';
import { apiConstants } from '@shared/constants/api.constants';
import {
  LeaveRequestListResponse,
  ImageResponse,
  LeaveAcceptRejectResponse,
} from '../types/types';

fdescribe('LeaveConfirmationService', () => {
  let service: LeaveConfirmationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeaveConfirmationService],
    });
    service = TestBed.inject(LeaveConfirmationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of leave requests', () => {
    const mockResponse: LeaveRequestListResponse = {
      data: {
        skip: 0,
        take: 10,
        count: 1,
        employeeLeaveRequestResponse: [
          {
            id: 1,
            employeeId: 123,
            employeeName: 'John Doe',
            leaveType: 'Sick Leave',
            departmentId: 2,
            department: 'IT',
            phoneNumber: '1234567890',
            leaveFrom: '2024-09-01',
            leaveTo: '2024-09-05',
            dayLeave: 'Full Day',
            reasonForLeave: 'Flu',
            leaveRequestStatus: 'Pending',
            totalLeaveDuration: 5,
          },
        ],
      },
      message: 'Success',
      result: 1,
    };

    service.fetchRequestList().subscribe((leaveRequests) => {
      expect(leaveRequests.length).toBe(1);
      expect(leaveRequests[0].id).toBe(1);
    });

    const req = httpMock.expectOne(
      `${baseUrl}${apiConstants.leave.getEmployeeLeaveRequestList}`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockResponse);
    req.flush(mockResponse);
  });

  it('should return empty list if data is not present', () => {

    service.fetchRequestList().subscribe((response) => {
      expect(response.length).toBe(0);
      expect(response).toBe([]);
    })

    const req = httpMock.expectOne(`${baseUrl}${apiConstants.leave.getEmployeeLeaveRequestList}`);
    expect(req.request.method).toBe('POST');
    req.flush({
      data: { employeeLeaveRequestResponse : null }
    })
  });

  it('should return image data', () => {
    const mockResponse: ImageResponse = {
      data: {
        imageDataBase64: 'imageBase64String',
        imageName: 'profile.jpg',
        employeeId: 1,
      },
      message: 'Success',
      result: 2,
    };

    service.fetchImage(1).subscribe((imageData) => {
      expect(imageData.imageName).toBe('profile.jpg');
      expect(imageData.employeeId).toBe(1);
    });

    const req = httpMock.expectOne(
      `${baseUrl}${apiConstants.getProfilePictureOfEmp}1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should accept or reject a leave request', () => {
    const mockResponse: LeaveAcceptRejectResponse = {
      data: true,
      message: 'Leave request updated successfully',
      result: 2,
    };

    service.leaveAcceptReject(1, 'Accept').subscribe((response) => {
      expect(response.result).toBe(2);
      expect(response.message).toBe('Leave request updated successfully');
    });

    const req = httpMock.expectOne(
      `${baseUrl}${apiConstants.leave.approveRejectLeaveRequest}?id=1&status=Accept`
    );
    expect(req.request.method).toBe('PUT');
    req.flush(mockResponse);
  });
});
