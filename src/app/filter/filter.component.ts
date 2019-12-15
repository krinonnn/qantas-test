import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() submitFilters: EventEmitter<any> = new EventEmitter();
  activityTypes = [
    'relaxation',
    'recreational',
    'busywork',
    'music',
    'charity',
    'education'
  ];

  activityFilterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activityFilterForm = this.formBuilder.group({
      min: ['0'],
      max: ['100'],
      type: ['any']
    });
  }

  submitFilterValues() {
    const filtersObject = {
      min: this.activityFilterForm.controls.min.value, max:
      this.activityFilterForm.controls.max.value, type: this.activityFilterForm.controls.type.value
    };

    this.submitFilters.emit(filtersObject);
  }
}
