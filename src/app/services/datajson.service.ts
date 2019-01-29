import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

declare var require: any;
declare var $: any;
const crimeServers: any = require('src/assets/data/dashboard/main_graph/crime_servers_graph.json');
const malwares = require('src/assets/data/dashboard/main_graph/malware_graph.json');
const bots = require('src/assets/data/dashboard/main_graph/bots_graph.json');
const credentials = require('src/assets/data/dashboard/main_graph/credentials_graph.json');
const cards = require('src/assets/data/dashboard/main_graph/credit_cards_graph.json');
const listcrimeServers: any = require('src/assets/data/crimeserver_list/crime_servers_list.json');

@Injectable({
  	providedIn: 'root'
})
export class DatajsonService {

  	constructor(private http: HttpClient) { }

  	getCrimeServer(): Observable<any[]> {
        return of(crimeServers);
    }

    getMalware(): Observable<any[]> {
        return of(malwares);
    }

    getBots(): Observable<any[]> {
        return of(bots);
    }

    getCredentials(): Observable<any[]> {
        return of(credentials);
    }

    getCards(): Observable<any[]> {
        return of(cards);
    }

    getCrime(id: number): Observable<any[]> {
        let dato: any;

        $.each(listcrimeServers.data, function(i, item) {
			if(item.id == id) {
				dato = item;
			}
		});
		return of(dato);
    }
}
