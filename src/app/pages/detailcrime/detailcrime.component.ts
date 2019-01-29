import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Globals} from '../../globals';
import * as moment from 'src/assets/plantilla/vendors/bower_components/moment/moment.js';

import { DatajsonService } from '../../services/datajson.service';

declare var $: any;
@Component({
  	selector: 'app-detailcrime',
  	templateUrl: './detailcrime.component.html',
  	styleUrls: ['./detailcrime.component.css']
})
export class DetailcrimeComponent implements OnInit {

	crime_id: any = 0;
	status: any;
	type: any;
	indicator: any;
	last: any;
	asn: any;

  	constructor(private globals: Globals, private route: ActivatedRoute, private datajsonService: DatajsonService) { }

  	ngOnInit() {
  		setTimeout(() => 
			{
				this.globals.getUrl = 'crime';
			}
		,1000);

		this.crime_id = +this.route.snapshot.paramMap.get('id');
  		
  		this.datajsonService.getCrime(this.crime_id)
			.subscribe(data => {
				let dato: any = data;
				this.status = dato.attributes.status;
				this.type = dato.type;
				this.indicator = dato.attributes.crime_server_url;
				this.last = moment(dato.attributes.last_seen).format('DD/MM/YYYY h:mm A');
				this.asn = dato.id;
			}
		);

		if($('.easy-pie-chart')[0]) {
	        $('.easy-pie-chart').each(function () {
	            var value = $(this).data('value');
	            var size = $(this).data('size');
	            var trackColor = $(this).data('track-color');
	            var barColor = $(this).data('bar-color');

	            $(this).find('.easy-pie-chart__value').css({
	                lineHeight: (size)+'px',
	                fontSize: (size/4)+'px',
	                color: barColor
	            });

	            $(this).easyPieChart ({
	                barColor: barColor,
	                trackColor: trackColor,
	                scaleColor: 'rgba(0,0,0,0)',
	                lineCap: 'round',
	                lineWidth: 2,
	                size: size,
	                animate: 3000
	            });
	        });
	    };
  	}

  	ngAfterViewInit(): void {
	}

}
