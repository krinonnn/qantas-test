import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ModalComponent} from "../modal/modal.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() activities: any = [];
  @ViewChild('activityCard', { static: false }) activityCard: ElementRef;

  constructor(public dialog: MatDialog) {}
 animal: string;
  name: string;
  ngOnInit() {

  }

  openModal(activity): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '30vw',
      height: '30vh',
      data: activity
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  noActivitiesFound() {
    if (this.activities[0] !== undefined && this.activities[0].error) {
      return true;
    } else {
      return false;
    }
  }
}
