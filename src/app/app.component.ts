import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'anubudh-task';


  sideNavlinks: any = [
    {
      iconName: 'dashboard',
      iconText: 'Dashboard',
      iconUrl: '/dashboard',
    },
    {
      iconName: 'supervisor_account',
      iconText: 'Profile',
      iconUrl: '/profile',
    },
    {
      iconName: 'view_module',
      iconText: 'Table',
      iconUrl: '/table',
    },
  ];


  ngOnInit() {

  }


}
