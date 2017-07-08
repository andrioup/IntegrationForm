import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Parameters} from "../model";


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit{
@Input()
  parameters:Parameters;
  newParameter: string;
  parameterList: any;
  @Output() outParam = new EventEmitter();

  constructor() {
    this.newParameter = '';
    this.outParam.emit(this.parameterList);
  }
  add(event) {
    if(this.parameterList.find(f=>f == this.newParameter))
      return;
    this.parameterList.push(this.newParameter);
    this.newParameter = '';
    event.preventDefault();
    this.outParam.emit(this.parameterList);
  }
  delete(index) {
    if(this.parameterList[index] === 'Domain' || this.parameterList[index] === 'CallerID')
      return;
      this.parameterList.splice(index, 1);
      this.outParam.emit(this.parameterList);
  }
  ngOnInit(){
    this.parameterList = this.parameters;
  }
}



