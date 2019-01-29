import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Globals} from '../../globals';
import * as moment from 'src/assets/plantilla/vendors/bower_components/moment/moment.js';

declare var $: any;
@Component({
  	selector: 'app-listcrime',
  	templateUrl: './listcrime.component.html',
  	styleUrls: ['./listcrime.component.css']
})
export class ListcrimeComponent implements OnInit {

	dtOptions: any = {};
	table: any = '';

  	constructor(private globals: Globals, private router: Router) { }

  	ngOnInit() {
  		setTimeout(() => 
			{
				this.globals.getUrl = 'crime';
			}
		,1000);
		this.table = $('#data-table').DataTable(this.fillTable());
  	}

  	ngAfterViewInit(): void {
  		const that = this;

        $("body").on("click", "[data-table-action]", function(a) {
            a.preventDefault();
            var b = $(this).data("table-action");
            if ("excel" === b && $(this).closest(".dataTables_wrapper").find(".buttons-excel").trigger("click"),
            "csv" === b && $(this).closest(".dataTables_wrapper").find(".buttons-csv").trigger("click"),
            "print" === b && $(this).closest(".dataTables_wrapper").find(".buttons-print").trigger("click"),
            "fullscreen" === b) {
                var c = $(this).closest(".card");
                c.hasClass("card--fullscreen") ? (c.removeClass("card--fullscreen"),
                $("body").removeClass("data-table-toggled")) : (c.addClass("card--fullscreen"),
                $("body").addClass("data-table-toggled"))
            }
        })

        $('#data-table').on( 'click', '.btn-details', function () {
			that.router.navigate(['/detailcrime/'+$(this).attr('date')]);
	    });
	}

  	fillTable() {
    	return this.dtOptions = {
  	      	pageLength: 10,
  	      	autoWidth: !1,
            responsive: !0,
            "destroy": true,
        	language: {
          		"url": "src/assets/Spanish.json",
          		 searchPlaceholder: "Escriba parametro a filtrar..."
      		},
        	ajax: 'assets/data/crimeserver_list/crime_servers_list.json',
        	columns: [
        		{ title: 'Seen', data: 'attributes.first_seen', "type": "date", "render": function ( data, type, row, meta ) {	return moment(data).format('DD/MM/YYYY h:mm A');}},
        		{ title: 'Url', data: 'attributes.crime_server_url'},
        		{ title: 'type', data: 'attributes.main_type'},
        		{ title: 'Subtype', data: 'attributes.subtype_name'},
        		{ title: 'Status', data: 'attributes.status', "render": function ( data, type, row, meta ) {return (data == "online" ? '<i class="zmdi zmdi-cloud-done">' : '<i class="zmdi zmdi-cloud-off">')}},
        		{ title: 'Details', data: 'id', "render": function ( data, type, row, meta ) {
        			return	'<button date="'+data+'" class="btn btn-light btn--icon btn-sm btn-details"><i class="actions__item zmdi zmdi-zoom-in"></i></button>';
				}}
        	],
            dom: '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
            buttons: [{
                  extend: "excelHtml5",
                  title: "Export Data"
            }, {
                  extend: "csvHtml5",
                  title: "Export Data"
            }, {
                  extend: "print",
                  title: "Material Admin"
            }],
      			"initComplete": function () {
      	            $(this).closest(".dataTables_wrapper").find(".dataTables__top").prepend('<div class="dataTables_buttons hidden-sm-down actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
            },
        };
  	}

}
