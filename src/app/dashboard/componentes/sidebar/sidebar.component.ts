import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  

  navbarOpen : boolean;
  constructor() {

    this.navbarOpen=false;

   }

  ngOnInit() {
  }

  ocularsidebar(){
    this.navbarOpen=!this.navbarOpen;

  }

}
