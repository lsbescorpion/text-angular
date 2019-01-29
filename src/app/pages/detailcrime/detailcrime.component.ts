import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Globals} from '../../globals';
import * as moment from 'src/assets/plantilla/vendors/bower_components/moment/moment.js';
//import * as go from 'src/assets/plantilla/js/go.js';
import * as go from 'gojs';

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
	myDiagram: any;

  	constructor(private globals: Globals, private route: ActivatedRoute, private datajsonService: DatajsonService) { }

  	ngOnInit() {
  		setTimeout(() => 
			{
				this.globals.getUrl = 'crime';
			}
		,1000);

		/**configuracion de gojs **/
		var $$ = go.GraphObject.make;

	    this.myDiagram = $$(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
        {
            "undoManager.isEnabled": true  // enable undo & redo
        });

        this.myDiagram.nodeTemplate = $$(go.Node, "Auto",  // the Shape will go around the TextBlock
        	$$(go.Shape, "RoundedRectangle", { strokeWidth: 0, fill: "white" },
          	// Shape.fill is bound to Node.data.color
          	new go.Binding("fill", "color")),
        	$$(go.TextBlock,
          		{ margin: 8 },  // some room around the text
          		// TextBlock.text is bound to Node.data.key
          		new go.Binding("text", "key"))
      	);

		this.crime_id = +this.route.snapshot.paramMap.get('id');
  		
  		/**asignacion de datos al detail**/
  		this.datajsonService.getCrime(this.crime_id)
			.subscribe(data => {
				let dato: any = data;
				this.status = dato.attributes.status;
				this.type = dato.type;
				this.indicator = dato.attributes.crime_server_url;
				this.last = moment(dato.attributes.last_seen).format('DD/MM/YYYY h:mm A');
				this.asn = dato.id;
				this.myDiagram.model = new go.GraphLinksModel(
			    [
				    { key: dato.type, color: "lightblue" },
				    { key: "195.22.126.203", color: "orange" },
				    { key: "AZORult", color: "lightgreen" }
			    ],
			    [
			     	{ from: dato.type, to: "195.22.126.203" },
			      	{ from: "195.22.126.203", to: dato.type },
			      	{ from: dato.type, to: "AZORult" }
				]);
			}
		);
		/**	configuracion de easy-pie-chart **/
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
