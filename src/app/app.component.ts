import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Tank } from './tank';
import { Subject } from 'rxjs';
//var cors = require('cors');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'blitzFrontEnd';
  
  dtOptions: DataTables.Settings = {};
  tanks: Tank[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private alltanks:ServiceService) {
  	console.log("app.component constructor");
  }
    
  ngOnInit() {
  	this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
		this.alltanks.getTanks().subscribe(data => {
        this.tanks = (data as any).data;
        this.dtTrigger.next();
      });
	}
}
