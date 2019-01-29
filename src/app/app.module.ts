import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { NgxEasypiechartModule } from 'ngx-easypiechart';
import { routing }        from './routes/app.routing';
import { Globals } from './globals';

import {} from 'ngx-easypiechart';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { SidebarComponent } from './pages/partials/sidebar/sidebar.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListcrimeComponent } from './pages/listcrime/listcrime.component';
import { DetailcrimeComponent } from './pages/detailcrime/detailcrime.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	HeaderComponent,
	    SidebarComponent,
	    FooterComponent,
	    DashboardComponent,
	    ListcrimeComponent,
	    DetailcrimeComponent
  	],
  	imports: [
    	BrowserModule,
    	BrowserAnimationsModule,
	    ReactiveFormsModule,
	    routing,
	    ChartsModule,
      HttpClientModule,
      NgxEasypiechartModule
  	],
  	providers: [Globals],
  	bootstrap: [AppComponent]
})
export class AppModule { }
