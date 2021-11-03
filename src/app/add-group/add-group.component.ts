import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { faUsers, faPlus, faPlaneDeparture, faHome, faHeart, faUtensils, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit, AfterViewInit {

  faUsers = faUsers;
  faPlus = faPlus;
  faTrip = faPlaneDeparture;
  faHome = faHome;
  faCouple = faHeart;
  faOther = faListAlt;
  faDinner = faUtensils;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      // Code to refresh the multi-select as it not renders on first page load.
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '../../assets/js/custom.js';
      this.renderer.appendChild(document.body, script);
  }
}

