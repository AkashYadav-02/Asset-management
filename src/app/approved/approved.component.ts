import { Component } from '@angular/core';
import { NavbarAfterHomePageComponent } from '../navbar-after-home-page/navbar-after-home-page.component';
import { accountDetails,disbursmentdetails } from './approved-data';
import { GridOptions,ColDef  } from 'ag-grid-community';
@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent {
accountDetails = accountDetails;
disbursmentdetails = disbursmentdetails;
gridOptions: GridOptions;
rowData: any[];


showAccount = false;
showTransaction = false;
showDisbursement = false;
showAccountDetails() {
  this.showAccount = true;
  this.showTransaction = false;
  this.showDisbursement = false;
}
showTransactionTable() {
  this.showAccount = false;
  this.showTransaction = true;
  this.showDisbursement = false;
}
showDisbursementDetails() {
  this.showAccount = false;
  this.showTransaction = false;
  this.showDisbursement = true;
}
  constructor() {
    this.gridOptions = {
      
      columnDefs: [
        { headerName: 'Date', field: 'date' },
        { headerName: 'Type', field: 'description' },
        { headerName: 'EMI', field: 'emi' },
        { headerName: 'Principle', field: 'amount' },
        { headerName: 'Intrest', field: 'intrest' },
        { headerName: 'Loan Amount', field: 'LoanAmount'},
        { headerName: 'APR', field: 'apr' },
        
      
      ],
     
    };
    const defaultColDef = {
      sortable: true
    };
    this.rowData = [
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },
      { date: '2023-01-01', description: 'Repaymment', amount: '$1,27,700',emi:'$1,42,000',intrest:'$142.00',LoanAmount:'$30,83,000',apr:'5.80%' },

    ];
  }
}

