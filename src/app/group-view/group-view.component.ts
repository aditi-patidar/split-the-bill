import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUtensils, faTrashAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent implements OnInit {

  faUtensils = faUtensils;
  faDelete = faTrashAlt;
  faUsers = faUsers;
  groupId = ''

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.groupId = this.activatedRoute.snapshot.params['groupId'];
  }

}
