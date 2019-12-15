import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import {HttpClient, HttpHandler} from "@angular/common/http";
import {Component} from "@angular/core";

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppFilter
    ],
    providers: [HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});

@Component({
  selector: 'app-filter',
  template: ''
})
class AppFilter {
}
