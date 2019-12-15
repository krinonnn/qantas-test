import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Activity} from "./shared/activity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseURL = 'https://www.boredapi.com/api';

  constructor(private http: HttpClient) {}

  public getActivity(params): Observable<Activity> {
    const min = params.min / 100;
    const max = params.max / 100;
    if (params.type !== 'any') {
      return this.http.get<Activity>(this.baseURL + '/activity?type=' + params.type + '&minprice=' + min +
      '&maxprice=' + max);
    } else {
      return this.http.get<Activity>(this.baseURL + '/activity?minprice=' + min +
      '&maxprice=' + max);
    }
  }
}
