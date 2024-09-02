import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveRequestList } from '../../types/types';

@Component({
  selector: 'app-leave-approve-card',
  templateUrl: './leave-approve-card.component.html',
  styleUrl: './leave-approve-card.component.scss'
})
export class LeaveApproveCardComponent implements OnInit{
  constructor(private route:ActivatedRoute, private router:Router, @Inject(MAT_DIALOG_DATA) public data:LeaveRequestList){}

  ngOnInit(): void {
    console.log(this.data)
  }
}
