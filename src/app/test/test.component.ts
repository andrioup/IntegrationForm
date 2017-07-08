import {Component, Input, OnInit} from '@angular/core';
import {Basic, FillParameters, Form, Parameters} from "../model";
import {Restangular} from "ng2-restangular";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions} from "@angular/http";
import {log} from "util";
import  '../../assets/Logger.js'


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() formInput: Form;
  public form: Form;
  public InputParameters = new Array<FillParameters>();
  public showButtons:boolean = false;
  public JsonParameters:any;
  public Basic:Basic = new Basic();
  public Response:string = "";
  public json:any;
  constructor(private restangular: Restangular) {
    window.onerror = function() {
      alert("Error caught");
    };
  }


  ngOnInit() {
    Logger.clear();
    Logger.show();
    Logger.enable();
    Logger.open();
    this.form = this.formInput;
    this.conf(this.form);
/*    Logger.print("test","error");
    Logger.print("test","success");
    Logger.print("test","warning");*/
  }
  conf(form:Form){
    this.showButtons = true;
    if(form.ApiType == "rest"){
      if(form.AuthType == "Basic"){
        //read input parameters to make the form
        this.form.Parameters.param.forEach(f=>{
          let p = new FillParameters();
          p.param = f;
          p.value = "";
          this.InputParameters.push(p);
        });
        this.InputParameters[0].value = "99944366";
        this.InputParameters[1].value = "https://xanthiz3cx.freshdesk.com";
        this.InputParameters[2].value = "04Q6aHvcZOfPPiFEJfJU";
        this.InputParameters[3].value = "X";
        //construct bearer

      }else if (form.AuthType == "OAuth"){
        //do for oauth
      }
    }
  }
    fileChange(event) {
      let fileList: FileList = event.target.files;
      if(fileList.length > 0)   {
        let file: File = fileList[0];
        let reader = new FileReader();
        reader.onload = function(event)
        {
          let contents = reader.result;
          this.JsonParameters = JSON.parse(contents);
          this.readParameters(this.JsonParameters.Parameters.param);
          this.showButtons = true;

        }.bind(this);
        reader.readAsText(file);
      }
    }
    readParameters(param:Array<any>){
        param.forEach(f=>{
          let p = new FillParameters();
          p.param = f;
          if(f === 'Domain')
            p.value = "https://xanthiz3cx.freshdesk.com";
          else
            p.value = "";
          this.InputParameters.push(p);
        })
    }
    call(){
      let op = this.form.ContactOutputParameters[0].PathToParameter;
     this.Basic.BearerStringForm = this.form.BasicAuthString;
     this.Basic.BearerString = this.form.BasicAuthString;
     this.Basic.Querry = this.form.ContactsUrl;
      this.InputParameters.forEach(f=>{
        let rep = "[" + f.param + "]";
        this.Basic.BearerString = this.Basic.BearerString.replace(rep,f.value);
        this.Basic.Querry = this.Basic.Querry.replace(rep,f.value);
      });
      Logger.print(this.Basic.BearerString,"success");
      this.Basic.BearerStringEncoaded = btoa(this.Basic.BearerString);
      Logger.print(this.Basic.BearerStringEncoaded,"success");
      let ra = this.restangular.withConfig((config) => {
        config.setBaseUrl(this.InputParameters[1].value)
        .setDefaultHeaders({'Authorization': 'Basic ' + this.Basic.BearerStringEncoaded})
        .addErrorInterceptor((response) => {
          Logger.print(response.message,"error");
            return false; // error handled
        }).setFullResponse(true)
        .addResponseInterceptor((data, operation, what, url, response)=> {
          function logMapElements(value, key, map) {
            Logger.print(`m[${key}] = ${value}`);
          }
          Logger.print(response);
          Logger.print(`Operation:${operation}`);
          Logger.print(`What:${what}`);
          Logger.print(`Url:${url}`);
          Logger.print(`(Responese)OK:${response.ok}
          Status:${response.status}
          StatusText:${response.statusText}
          Body:${response._body}`
          );
          response.headers._headers.forEach(logMapElements);
        })
      }).one(this.Basic.Querry)
        .get().catch(c=>{
          Logger.print(c,"error");
        })
        .subscribe(s=>{
         let json = JSON.parse(s._body);
          let res = eval(op);

        },(err)=>{
          Logger.print(err,"error");

      });


    }
}






