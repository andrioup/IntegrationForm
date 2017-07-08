/**
 * Created by andreaspa on 6/23/2017.
 */
export class Form{
  public FullName :string;
  public Company:string;
  public Email:string;
  public CRMName:string;
  public WebSite:string = "https://";
  public CRMContactName:string;
  public CRMContactEmail:string;
  public UserBase:string;
  public MainMarket:string;
  public ApiType:string;
  public AuthType:string;
  public AuthUrl:string  = "https://";
  public TokenUrl:string  = "https://";
  public CallBackUrl:string  = "https://";
  public Parameters:Parameters;
  public BasicAuthString:string;
  public QuerryContacts:boolean;
  public QuerryCompanies:boolean;
  public QuerryLeads:boolean;
  public ContactsUrl:string ;
  public CompaniesUrl:string;
  public LeadsUrl:string;
  public ContactPopUp:boolean = false;
  public CompaniesPopUp:boolean = false;
  public LeadsPopUp:boolean = false;
  public ContactOutputParameters:OutputParameters;
  public CompaniesOutputParameters:OutputParameters;
  public LeadsOutputParameters:OutputParameters;
  public ContactPopUpUrl:string;
  public CompaniesPopUpUrl:string;
  public LeadsPopUpUrl:string;
  public CreateContact:boolean = false;
  public NewContactUrl:string;
  public NewContactPopUpUrl:string;
  public CreateJournal:boolean = false;
  public NewJournalUrl:string;
  public NewJournalPopUpUrl:string;
  public NewContactParameters:OutputParameters;
  public NewJournalParameters:OutputParameters;

}

export class Parameters{
  public param:Array<string>;
}

export class OutputParameters{
  public oparam:Array<OutputParameter>;
}

export class OutputParameter{
  public Param:string;
  public PathToParameter:string;
}

export class FillParameters{
  public param:string;
  public value:string;

}

export class Basic{
  public BearerStringForm:string;
  public BearerString:string;
  public BearerStringEncoaded:string;
  public Querry:string;


}


