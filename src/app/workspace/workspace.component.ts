import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RedirectMenuService } from 'src/services/redirect-menu.service';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  constructor(private http: HttpClient,private router: Router,
    private redirectMenu: RedirectMenuService) { }

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
  public rowData$!: Observable<any[]>;
  redirect(path: string) {
    this.redirectMenu.redirectTo(path);
  }
}
