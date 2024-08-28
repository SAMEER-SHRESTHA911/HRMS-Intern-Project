import { Component } from '@angular/core';

@Component({
  selector: 'app-attandance-details',
  templateUrl: './attandance-details.component.html',
  styleUrl: './attandance-details.component.scss',
})
export class AttandanceDetailsComponent {
  dataSource: any;
  constructor() {}
  applyFilter(event: Event) {
    if (this.dataSource) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
