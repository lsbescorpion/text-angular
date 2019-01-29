import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';

/*** DatajsonService servicio para simular la recoleccion de datos del servidor **/
import { DatajsonService } from '../../services/datajson.service';

declare var $: any;

@Component({
  	selector: 'app-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	/***attributes chart crime server***/
	crimeserver: any;
	crimeserverlenght: any = 0;
	datasetscrime: any;
	labelscrime: any;
	optioncrime: any;
	datosycrime: any = [];
	datosxcrime: any = [];

	/***attributes malware**/
	malware: any;
	malwarelenght: any = 0;
	datasetsmalware: any;
	labelsmalware: any;
	optionmalware: any;
	datosymalware: any = [];
	datosxmalware: any = [];

	/***attributes bots**/
	bot: any;
	botlenght: any = 0;
	datasetsbot: any;
	labelsbot: any;
	optionbot: any;
	datosybot: any = [];
	datosxbot: any = [];

	/***attributes credentials**/
	credential: any;
	credentiallenght: any = 0;
	datasetscredential: any;
	labelscredential: any;
	optioncredential: any;
	datosycredential: any = [];
	datosxcredential: any = [];

	/***attributes cards**/
	card: any;
	cardlenght: any = 0;
	datasetscard: any;
	labelscard: any;
	optioncard: any;
	datosycard: any = [];
	datosxcard: any = [];

	/***attributes chart general**/
	datasets: any;
	labels: any;
	option: any;
	datosy: any = [];
	datosx: any = [];

  	constructor(private globals: Globals, private datajsonService: DatajsonService) { }

  	/*** funcion init se llaman a los metodos para llenar los graficos inicialmente cuando carga la pagina***/
  	ngOnInit() {
  		this.CrimeServers();
  		this.Malware();
  		this.Bots();
  		this.Cards();
  		this.Credentials();
  		this.General("crimeservers");
  	}

  	ngAfterViewInit(): void {
  		var that = this;
		setTimeout(() => 
			{
				this.globals.getUrl = 'boards';
				$.each(that.datosycrime, function(i, item) {
					that.crimeserverlenght += item;
				});
				$.each(that.datosymalware, function(i, item) {
					that.malwarelenght += item;
				});
				$.each(that.datosybot, function(i, item) {
					that.botlenght += item;
				});
				$.each(that.datosycredential, function(i, item) {
					that.credentiallenght += item;
				});
				$.each(that.datosycard, function(i, item) {
					that.cardlenght += item;
				});
			}
		,1000);
	}

	/***funcion para llenar el grafico general**///
	General(graf) {
		var that = this;
		var arr = (graf == "crimeservers" ? this.crimeserver.data : (graf == "malware" ? this.malware.data : (graf == "bots" ? this.bot.data : (graf == "credentials" ? this.credential.data : this.card.data))));
		$.each(arr, function(i, item) {
			that.datosy[i] = item.attributes.count;
			that.datosx[i] = item.attributes.date;
		});	

		this.datasets = [
			{
				label: graf.toUpperCase(),
				data: this.datosy
			}
		];

		this.labels = this.datosx;

		this.option = {
	        animation: {
	            easing: "linear"
	        }
	    }
	}

	/***funcion para llenar el grafico de crimeserver**///
	CrimeServers() {
		var that = this;
		this.datajsonService.getCrimeServer()
			.subscribe(data => {
				this.crimeserver = data;
				$.each(this.crimeserver.data, function(i, item) {
					that.datosycrime[i] = item.attributes.count;
					that.datosxcrime[i] = item.attributes.date;
				});	

				this.datasetscrime = [
					{
						label: "CRIMESERVERS",
						data: this.datosycrime
					}
				];

				this.labelscrime = this.datosxcrime;

				this.optioncrime = {
			        animation: {
			            easing: "linear"
			        },
			        scales: {
			            xAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }]
			        }
			    }
			}
		);
	}

	/***funcion para llenar el grafico de malware**///
	Malware() {
		var that = this;
		this.datajsonService.getMalware()
			.subscribe(data => {
				this.malware = data;
				$.each(this.malware.data, function(i, item) {
					that.datosymalware[i] = item.attributes.count;
					that.datosxmalware[i] = item.attributes.date;
				});	

				this.datasetsmalware = [
					{
						label: "MALWARES",
						data: this.datosymalware
					}
				];

				this.labelsmalware = this.datosxmalware;

				this.optionmalware = {
			        animation: {
			            easing: "linear"
			        },
			        scales: {
			            xAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }]
			        }
			    }
			})
	}

	/***funcion para llenar el grafico de malware**///
	Bots() {
		var that = this;
		this.datajsonService.getBots()
			.subscribe(data => {
				this.bot = data;
				$.each(this.bot.data, function(i, item) {
					that.datosybot[i] = item.attributes.count;
					that.datosxbot[i] = item.attributes.date;
				});	

				this.datasetsbot = [
					{
						label: "BOTS",
						data: this.datosybot
					}
				];

				this.labelsbot = this.datosxbot;

				this.optionbot = {
			        animation: {
			            easing: "linear"
			        },
			        scales: {
			            xAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }]
			        }
			    }
			})
	}

	/***funcion para llenar el grafico de credentials**///
	Credentials() {
		var that = this;
		this.datajsonService.getCredentials()
			.subscribe(data => {
				this.credential = data;
				$.each(this.credential.data, function(i, item) {
					that.datosycredential[i] = item.attributes.count;
					that.datosxcredential[i] = item.attributes.date;
				});	

				this.datasetscredential = [
					{
						label: "CREDENTIALS",
						data: this.datosycredential
					}
				];

				this.labelscredential = this.datosxcredential;

				this.optioncredential = {
			        animation: {
			            easing: "linear"
			        },
			        scales: {
			            xAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }]
			        }
			    }
			})
	}

	/***funcion para llenar el grafico de cards**///
	Cards() {
		var that = this;
		this.datajsonService.getCards()
			.subscribe(data => {
				this.card = data;
				$.each(this.card.data, function(i, item) {
					that.datosycard[i] = item.attributes.count;
					that.datosxcard[i] = item.attributes.date;
				});	

				this.datasetscard = [
					{
						label: "CARDS",
						data: this.datosycard
					}
				];

				this.labelscard = this.datosxcard;

				this.optioncard = {
			        animation: {
			            easing: "linear"
			        },
			        scales: {
			            xAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }],
			            yAxes: [{
			                ticks: {
			                    callback: function(value, index, values) {
			                        return null;
			                    }
			                }
			            }]
			        }
			    }
			})
	}

}
