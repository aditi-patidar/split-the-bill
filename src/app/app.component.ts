import { Component } from '@angular/core';
import { faUsers, faUser, faChartLine, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-sharing-app';
  faUsers = faUsers;
  faUser = faUser;
  faChartLine = faChartLine;
  faUserCircle = faUserCircle;
}
