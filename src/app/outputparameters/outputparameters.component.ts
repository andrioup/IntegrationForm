import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OutputParameter, OutputParameters} from "../model";

@Component({
  selector: 'app-outputparameters',
  templateUrl: './outputparameters.component.html',
  styleUrls: ['./outputparameters.component.css']
})
export class OutputparametersComponent implements OnInit {
  @Input() hparam:string;
  @Input() hval:string;
  @Input() param:string;
  @Input() val:string;
  @Output() outParam = new EventEmitter();
  newParameter: OutputParameter;
  outparameterList: OutputParameters;

  constructor() {
    this.outparameterList = new OutputParameters();
    this.outparameterList.oparam = new Array<OutputParameter>()
    this.newParameter = new OutputParameter();
    this.newParameter.Param = '';
    this.newParameter.PathToParameter = '';


    //mock
    let coa = new Array<OutputParameter>();
    let coap = new OutputParameter();
    coap.Param = "id";
    coap.PathToParameter = "json[0].user.id"
    coa.push(coap);
    coap = new OutputParameter();
    coap.Param = "name";
    coap.PathToParameter = "json[0].user.name"
    coa.push(coap);
    this.outparameterList.oparam = coa;
    //mock end


    this.outParam.emit(this.outparameterList.oparam);
  }

  add(event) {
    this.outparameterList.oparam.push(this.newParameter);
    this.newParameter = new OutputParameter();
    this.newParameter.Param = '';
    this.newParameter.PathToParameter = '';
    event.preventDefault();
    this.outParam.emit(this.outparameterList.oparam);

  }

  delete(index) {
    this.outparameterList.oparam.splice(index, 1);
    this.outParam.emit(this.outparameterList.oparam);
  }

ngOnInit(){


}

}
