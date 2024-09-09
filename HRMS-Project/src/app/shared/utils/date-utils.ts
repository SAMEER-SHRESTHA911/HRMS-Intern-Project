export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

//To Get Date for Today and Tomorrow as string
export const getTodayDate = (addDay: number): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate() + addDay).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export interface DayData {
  getToday: string;
  getTomorrow: string;
}
export const DAY_DATA: DayData = {
  getToday: getTodayDate(0),
  getTomorrow: getTodayDate(1),
};
