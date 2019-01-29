import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    searchForm: FormGroup;

  	constructor(private formBuilder: FormBuilder,) { }

  	ngOnInit() {
  		  this.searchForm = this.formBuilder.group({
            search: ['']
        });
  	}

}
