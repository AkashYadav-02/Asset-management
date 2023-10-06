import { Component} from '@angular/core';
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
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.rowData$ = this.http.get<any[]>('../../assets/JSONfiles/workspace.json');
  }

  title = 'aggridpro';
  columnDefs: ColDef[] = [
    { field: 'appID', cellStyle: {'font-family': 'Montserrat', 'font-weight':'bold'}},
    { field: 'customerName', cellStyle: {'font-family': 'Montserrat', 'font-weight':'bold'}},
    { field: 'carSelection', cellStyle: {'font-family': 'Montserrat', 'font-weight':'bold'}},
    { field: 'financing' , cellStyle: {'font-family': 'Montserrat', 'font-weight':'bold'}},
    { field: 'status', width: 100, cellStyle: {'color': 'black', 'text-align':'left'}}
  ];

  public defaultColDef: ColDef = {
    sortable:true,
    filter: true,
    // floatingFilter: true,
    width: 210, 
    maxWidth: 210, 
    cellStyle: {'font-family': 'Montserrat', 'font-weight':'bold', 'font-size':'11px'}
  };
  public rowData$!: Observable<any[]>;
}
