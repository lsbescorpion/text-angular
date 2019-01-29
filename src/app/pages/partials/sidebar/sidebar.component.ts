import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Globals} from '../../../globals';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	constructor(private route: ActivatedRoute, private router: Router, private globals: Globals) {}

	ngOnInit() {

	}	

}
