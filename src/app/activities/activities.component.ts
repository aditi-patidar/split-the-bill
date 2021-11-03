import { Component, OnInit } from '@angular/core';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  faUsers = faUsers
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
