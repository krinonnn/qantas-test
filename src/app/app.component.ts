import { Component } from '@angular/core';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activities: BehaviorSubject<Array<any>>;
  constructor() {}
  title = 'qantas-frontend-test';

  getActivity(params) {
    const service = new AppService();
    combineLatest(
      service.getActivity(params.minPrice),
      service.getActivity(params.maxPrice),
      service.getActivity(params.activityType)
    ).subscribe(result => {
      while (
        combineLatest(
          service.getActivity(params.minPrice),
          service.getActivity(params.maxPrice),
          service.getActivity(params.activityType)
        ).subscribe(res => {
          return res !== result;
        })
      ) {
        this.activities.next(result);
      }
    });
  }
}
