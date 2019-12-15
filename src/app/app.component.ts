import {Component, OnInit} from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { AppService } from './app.service';
import {FormBuilder, FormGroup} from "@angular/forms";
import {retry} from "rxjs/operators";

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {}

  title = 'qantas-frontend-test';
  results = [];

  ngOnInit() {
  }


  requestForActivities(e) {
    this.results = [];
    for (let step = 0; step < 5; step++) {
        this.appService.getActivity(e).subscribe(response => {
            this.results.push(response);
        });
    }
  }
}
