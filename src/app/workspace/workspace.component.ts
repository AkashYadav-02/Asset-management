import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('../../assets/JSONfiles/workspace.json');
  }

  title = 'aggridpro';
  columnDefs: ColDef[] = [
    { field: 'appID' },
    { field: 'customerName' },
    { field: 'carSelection' },
    { field: 'financing' },
    {
      field: 'status', width: 100, cellStyle: function(params) {
          if (params.node.data.status =='Completed') {
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px', 
            'border-top':'solid 1px #F4F6FB',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
            'border-bottom':'solid 2px #F4F6FB',
            'padding-top':'-50px',

            'margin-top':'0' ,'background-color': '#0A8835' };
          } else if (params.node.data.status == 'Rejected') {
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px', 'border-top':'solid 1px #F4F6FB',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
             'border-bottom':'solid 2px #F4F6FB',
             'padding-top':'-50px','margin-top':'0' ,'background-color': '#DB2423' };
          } else if (params.node.data.status == 'Pending') {
            return { 'color': 'black', 'text-align': 'center', 'border-radius':'20px', 'border-top':'solid 1px #F4F6FB',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
             'border-bottom':'solid 2px #F4F6FB',
             'padding-top':'-50px','margin-top':'0' ,'background-color': '#E2B133' };
          } else {
            console.log(params.node.data.status);
            return { 'color': 'white', 'text-align': 'center', 'border-radius':'20px', 'border-top':'solid 1px #F4F6FB',
            'border-left':'solid 5px #F4F6FB',
            'border-right':'solid 5px #F4F6FB',
             'border-bottom':'solid 2px #F4F6FB',
             'padding-top':'-50px','margin-top':'0' ,'background-color': 'yellow'};
          }
          
          
        }
      }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    // floatingFilter: true,
    width: 195,
    maxWidth: 195,
    cellStyle: { 'font-family': 'Inter', 'font-weight': '500', 'font-size': '11.5px' }
  };
  public rowData$!: Observable<any[]>;
}
