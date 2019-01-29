import { Component, OnInit } from '@angular/core';
import {trigger, animate, transition, style, query} from '@angular/animations';

@Component({
  	selector: 'app',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css'],
  	animations: [
	    trigger('fadeAnimation', [
			transition('* => *', [
			    query(
				    ':enter',
				    [style({ opacity: 0 })],
				    { optional: true }
			    ),
			    query(
			        ':enter',
			        [style({ opacity: 0 }), animate('0.3s ease-in', style({ opacity: 1 }))],
			        { optional: true }
			    )
			])
		])
   	]
})
export class AppComponent {
  	title = 'text-angular';
}

