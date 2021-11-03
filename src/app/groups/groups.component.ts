import { Component, OnInit } from '@angular/core';
import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  faUsers = faUsers;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
