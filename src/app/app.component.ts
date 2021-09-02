import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
//var cors = require('cors');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'blitzFrontEnd';
  
  constructor(private alltanks:ServiceService) {
  	console.log("app.component constructor");
  }
    
  ngOnInit() {
   console.log(this.alltanks.getTanks().subscribe());
	}
	
	
}
