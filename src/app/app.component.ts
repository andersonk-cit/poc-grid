import { Component, OnInit } from '@angular/core';
import { groupBy } from "lodash-es";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  columns: String[] = ['date', 'entry', 'amount'];
  transactions = [
    {
      entry: 'Pagamento de Tributos',

      amount: 500.0,

      balance: 1000518461.78,

      documentNumber: '756100',

      date: '2021-06-13',

      type: 'DEBIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 1422.11,

      balance: 1516521661.78,

      documentNumber: '756100',

      date: '2021-06-13',

      type: 'CREDIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 1155.0,

      balance: 10051651661.78,

      documentNumber: '756100',

      date: '2021-06-13',

      type: 'CREDIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 7481.61,

      balance: 1000121151.78,

      documentNumber: '756100',

      date: '2021-06-10',

      type: 'DEBIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 151.1,

      balance: 1001211661.78,

      documentNumber: '756100',

      date: '2021-06-10',

      type: 'CREDIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 151.1,

      balance: 1001211661.78,

      documentNumber: '756100',

      date: '2021-06-10',

      type: 'CREDIT',
    },
    {
      entry: 'Pagamento de Tributos',

      amount: 151.1,

      balance: 1001211661.78,

      documentNumber: '756100',

      date: '2021-06-14',

      type: 'CREDIT',
    },
  {
      entry: 'Pagamento de Tributos',

      amount: 151.1,

      balance: 1001211661.78,

      documentNumber: '756100',

      date: '2021-06-14',

      type: 'CREDIT',
    },
  ];
  transactionsGroup: any;
  title = 'TestGrid';

  ngOnInit() {
    this.transactionsGroup = Object.values(groupBy(this.transactions, 'date'));
    this.transactions = this.transactionsGroup["2021-06-13"];
    console.log(this.transactions);
    console.log(this.transactionsGroup);
  }
}
