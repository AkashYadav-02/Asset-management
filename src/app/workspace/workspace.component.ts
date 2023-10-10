import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { AgGridModule } from 'ag-grid-angular';
import { JsonOperationService } from '../json-operation.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {

  myObserver ;
  currentUrl : any;
  techDetailsParameter : any;
  default:string = '';
  
  constructor(private http: HttpClient,private router: Router,
    private redirectMenu: RedirectMenuService,
    private jsonOperation : JsonOperationService) { 
      this.myObserver = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras.state) {
          this.techDetailsParameter = navigation.extras.state;
          console.log("fro workspace",this.techDetailsParameter);
          
          if(this.techDetailsParameter.comp =="credit"){
            this.default = "No";
                this.pushData(this.techDetailsParameter);
          }else if(this.techDetailsParameter.comp == "apply"){
            this.default = "No";
            this.updateData(this.techDetailsParameter);

          }
        } 
        }
      });
    }

  ngOnInit() {
    // this.rowData$ = this.http.get<any[]>('../../assets/JSONfiles/workspace.json');
  if(this.default != "No"){
    this.http.get<any[]>('../../assets/JSONfiles/workspace.json').subscribe((data:any)=>{
      this.rowData$ = data;
    });
  }
    // console.log("json data",this.jsonOperation.getData());
    // let abc: any[]=this.jsonOperation.getData().subscribe((data: any)=>{

    //});
    // abc.push({"appID":"UNE5549","customerName":"Jhon","carSelection":"2023 Toyota Fortuner","financing":"2","status":"Processed"});
    // console.log("json d",this.rowData$);

    // console.log("this.techDetailsParameter",this.techDetailsParameter);
    // {"appID":"UNE8783", "customerName":"Jane Cooper", "carSelection":"2023 Toyota Glanza", "financing":"$1,40,000", "status":"Pending"},

    // appID : 'UNE8783',
    // let data = {
    //   appID : this.techDetailsParameter.applicationId,
    //   customerName: "Jhon",
    //   carSelection: this.techDetailsParameter.specs.name,
    //   financing:"2",
    //   status:"Processed"
    // }
    // let count  = 0;
    // let updatedData = this.jsonOperation.updateData(data).subscribe(
    //   updatedArray => {
    //     console.log('Updated Array:', updatedArray);
    //     this.rowData$ = updatedArray;
    //   },
    //   error => {
    //     console.error('Error:', error);
    //   }
    // );
      // setTimeout(() => {
        
      //   console.log("latest updated",updatedData);
      // }, 2000);
    


      
      // data.appID = "33";
      // console.log("data for 33",data);
      
      // console.log("again nwe 33");
      // this.jsonOperation.pushData(data).subscribe(
      //   print => {
      //     console.log("printing pushed data",print);
          
      //   }
      // )



    //  this.rowData$ = updatedData;
    //  updatedData.subscribe((data:any)=>{
    //   this.rowData$ = data;
    // });



    // console.log("new entry data",data);
    // console.log("updatedData",updatedData);
    
    // this.
    
    
  }

  

  title = 'aggridpro';
  columnDefs: ColDef[] = [
    { field: 'appID' },
    { field: 'customerName' },
    { field: 'carSelection' },
    { field: 'financing' },
    {
      field: 'status', width: 100, cellStyle: function(params) {
          if (params.node.data.status =='Processed') {
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px', 
            'border-top':'solid 3.5px #F4F6FB',
            'line-height':'2.3',
            'font-size':'11.5px',
            'font-family': 'Inter', 'font-weight': '500',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
            'border-bottom':'solid 3.5px #F4F6FB',
            'padding-top':'-50px',
            'margin-top':'0' ,'background-color': '#0A8835' };
          } else if (params.node.data.status == 'Rejected') {
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px',
            'border-top':'solid 3.5px #F4F6FB',
            'line-height':'2.3',
            'font-size':'11.5px',
            'font-family': 'Inter', 'font-weight': '500',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
            'border-bottom':'solid 3.5px #F4F6FB',
            'padding-top':'-50px','margin-top':'0' ,'background-color': '#DB2423' };
          } else if (params.node.data.status == 'Pending') {
            return { 'color': 'black', 'text-align': 'center', 'border-radius':'20px',
            'border-top':'solid 3.5px #F4F6FB',
            'line-height':'2.3',
            'font-size':'11.5px',
            'font-family': 'Inter', 'font-weight': '500',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
            'border-bottom':'solid 3.5px #F4F6FB',
            'padding-top':'-50px','margin-top':'0' ,'background-color': '#E2B133' };
          } else {
            console.log(params.node.data.status);
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px',
            'border-top':'solid 3.5px #F4F6FB',
            'line-height':'2.3',
            'font-size':'11.5px',
            'font-family': 'Inter', 'font-weight': '500',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
            'border-bottom':'solid 3.5px #F4F6FB',
            'padding-top':'-50px','margin-top':'0' ,'background-color': 'yellow'};
          }
          
          
        } 
      }
  ];

  gridOptions = { defaultColDef:{
    sortable: true,
    filter: true,
    // floatingFilter: true,
    width: 195,
    maxWidth: 195,
    cellStyle: { 'font-family': 'Inter', 'font-weight': '500', 'font-size': '11.5px' }
  },
  headerHeight: 30};
  // public rowData$!: Observable<any[]>;
  public rowData$!: any[];
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }

  onCellClicked(data: any){
    let transferData = {
      tableData: data.data,
      pramData : this.techDetailsParameter
    }
    if (data.data.status == "Pending") {
      this.redirectMenu.redirectWithdata("apply-now-pending",transferData);
    }else if(data.data.status == "Processed" ){
      this.redirectMenu.redirectWithdata("apply-now-approve",transferData);
    }
  }

  pushData(ipData: any){
    // {"appID":"UNE8783", "customerName":"Jane Cooper", "carSelection":"2023 Toyota Glanza", "financing":"$1,40,000", "status":"Pending"},
let data = {
  appID : ipData.applicationId,
  customerName : ipData.username,
  carSelection : ipData.specs.name,
  financing : '$' + ipData.specs.price.toString(),
  status : "Pending"
}

    this.jsonOperation.pushData(data).subscribe(
      print => {
        this.rowData$ = print;
      }
    )
  }
  updateData(ipData: any){

    console.log("updating data",ipData);
    
    // {"appID":"UNE8783", "customerName":"Jane Cooper", "carSelection":"2023 Toyota Glanza", "financing":"$1,40,000", "status":"Pending"},
let data = {
  appID : ipData.tableData.appID,
  customerName : ipData.tableData.appID,
  carSelection : ipData.tableData.carSelection,
  financing : ipData.tableData.financing,
  status : ipData.status
}

    this.jsonOperation.pushData(data).subscribe(
      print => {
        this.rowData$ = print;
      }
    )
  }
}
