import { Component, OnInit } from '@angular/core';
import {Form, OutputParameter, OutputParameters, Parameters} from "../model";
import  '../../assets/Logger.js'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'app';
  public terminate:boolean = false;
  public form:Form;
  public disableSection1:boolean = false;
  public disableSection2:boolean = false;
  public disableSection3:boolean = false;
  public disableSection4:boolean = false;
  public disableSection5:boolean = false;
  public showSection2:boolean = true;
  public showSection3:boolean = true;
  public showSection4:boolean = true;
  public showSection5:boolean = true;
  public showTest:boolean = false;
  public showForm:boolean = true;

  public userBase: string[] = ["0-1000", "1000-10,000", "10,000-50,000"];

  constructor() {

    this.form = new Form();
    this.form.Parameters = new Parameters();
    this.form.Parameters.param = new Array<string>();

    //---mock

    this.form.FullName = "Andreas Paradisiotis";
    this.form.Company = "3CX";
    this.form.Email = "apa@3cx.com";
    this.form.CRMName = "FreshDesk";
    this.form.WebSite = "https://www.freshdesk.com";
    this.form.CRMContactName = "Marios";
    this.form.CRMContactEmail = "mn@3cx.com";
    this.form.UserBase = "0-1000";
    this.form.MainMarket = "USA";
    this.form.ApiType = "rest";
    this.form.AuthType = "Basic";

    this.form.Parameters.param.push('CallerID');
    this.form.Parameters.param.push('Domain');
    this.form.Parameters.param.push('Username');
    this.form.Parameters.param.push('Password');

    this.form.BasicAuthString = "[Username]:[Password]";
    this.form.QuerryContacts = true;
    this.form.ContactsUrl = "contacts.json?query=phone like %[CallerID]";
    this.form.ContactPopUp = true;
    this.form.ContactPopUpUrl = "contacts/[id]";

  }
  onChangeAuth($event){

    this.form.Parameters.param = new Array<string>();
    if(this.form.AuthType === 'OAuth2'){
      this.form.Parameters.param.push('CallerID');
      this.form.Parameters.param.push('Domain');
      this.form.Parameters.param.push('ClientID');
      this.form.Parameters.param.push('ClientSecret');
    }
    else if(this.form.AuthType === 'Basic'){
      this.form.Parameters.param.push('CallerID');
      this.form.Parameters.param.push('Domain');
      this.form.Parameters.param.push('Username');
      this.form.Parameters.param.push('Password');
    }
  }

  onChange($event){

/*
    if(!this.isValidEmail(this.form.Email)){
      this.showSection2 = false;
    }

    if(this.isUndefinedOrEmpty(this.form.FullName)
      && this.isUndefinedOrEmpty(this.form.Company)
      && this.isUndefinedOrEmpty(this.form.Email)
      && this.isUndefinedOrEmpty(this.form.CRMName)
      && this.isUndefinedOrEmpty(this.form.WebSite)
      && this.isUndefinedOrEmpty(this.form.CRMContactName)
      && this.isUndefinedOrEmpty(this.form.CRMContactEmail)
      && this.isUndefinedOrEmpty(this.form.MainMarket)
    ){
      this.showSection2 = true;
      this.disableSection1 = true;
    }else{
      this.showSection2 = false;
    }

    if(this.form.ApiType === "rest"){
      this.terminate = false;
    }else if(this.form.ApiType === "soap"){
      this.terminate = true;
    }
*/

  }


    onChangeSec2($event){

/*    if(this.form.AuthType === 'OAuth2'){
      if(this.isUndefinedOrEmpty(this.form.AuthUrl)
      && this.isUndefinedOrEmpty(this.form.TokenUrl)
      && this.isUndefinedOrEmpty(this.form.CallBackUrl)){
        this.showSection3 = true;
      }else {
        this.showSection3 = false;
      }
    }
    else if (this.form.AuthType === 'Basic'){
      if(this.isUndefinedOrEmpty(this.form.BasicAuthString)
      ){
        this.showSection3 = true;
      }else {
        this.showSection3 = false;
      }*/
    //}



    }

  submit(){
    //this.download(JSON.stringify(this.form), 'test.json', 'text/json');
    this.showForm = false;
    this.showTest = true;


  }

  download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
  }

  addOutParamContacts(val){
    this.form.ContactOutputParameters = new OutputParameters();
    this.form.ContactOutputParameters = val;
  }

  addOutParamCompanies(val){
    this.form.CompaniesOutputParameters =
    this.form.CompaniesOutputParameters = val;
  }

  addOutParamLeads(val){
    this.form.LeadsOutputParameters = new OutputParameters();
    this.form.LeadsOutputParameters = val;
  }

  addParams(val){
    this.form.Parameters = val;
  }

  addOutParamCreateContact(val){
    this.form.NewContactParameters = new OutputParameters();
    this.form.NewContactParameters = val;
  }

  addOutParamCreateJournal(val){
    this.form.NewJournalParameters = new OutputParameters();
    this.form.NewJournalParameters = val;
  }

  isUndefinedOrEmpty(input:string){

    if(input !== undefined && input !== "")
      return true;
    else
      return false;

  }


  isValidUrl(){}

  isValidEmail(val:string):boolean
  {
    let e = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
    return e.test(val)
  }



  //---------------------------------



  ngOnInit(){
    Logger.hide();
    Logger.disable();
    Logger.close();
  }



}
