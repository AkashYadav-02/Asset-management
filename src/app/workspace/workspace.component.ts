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
    { field: 'appID'},
    { field: 'custName'},
    { field: 'carSelection'},
    { field: 'financing'},
    { field: 'status',cellStyle: {'color': 'white', 'background-color': 'green', 'border-radius':'10px', 'text-align':'center'}},
    { field: 'remark',cellStyle: {'margin-left':'20px'}},
  ];

  public defaultColDef: ColDef = {
    sortable:true,
    filter: true,
    // floatingFilter: true,
    width: 158, 
    maxWidth: 158
  };
  public rowData$!: Observable<any[]>;
}
