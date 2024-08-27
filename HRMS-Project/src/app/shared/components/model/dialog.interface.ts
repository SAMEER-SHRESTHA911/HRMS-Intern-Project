export interface DialogButton {
  label: string;
  type: 'primary' | 'warning';
  action: () => void;
}
export interface DialogData {
  titleArray: string[];
  buttonArray: DialogButton[];
}
