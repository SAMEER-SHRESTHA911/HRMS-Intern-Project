export const getTodayDate = (addDay: number): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + addDay).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export interface DayData {
  deptId: number;
  statusId: number;
  leaveTypeId: number;
  fromDate: string;
  toDate: string;
}
export const DAY_DATA: DayData = {
  deptId: 0,
  statusId: 0,
  leaveTypeId: 0,
  fromDate: getTodayDate(0),
  toDate: getTodayDate(10),
};
