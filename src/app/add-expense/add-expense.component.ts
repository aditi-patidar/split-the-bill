import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faFileInvoiceDollar, faUtensils, faPlus,
    faPlaneDeparture, faHome, faHeart, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  faExpense = faFileInvoiceDollar;
  faPlus = faPlus;
  faTrip = faPlaneDeparture;
  faHome = faHome;
  faCouple = faHeart;
  faOther = faListAlt;
  faUtensils = faUtensils;
  share = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddExpense(form: NgForm) {

  }

}
