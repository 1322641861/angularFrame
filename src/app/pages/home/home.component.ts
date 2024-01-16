import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultModel } from 'src/app/model/system.model';
import { APIService } from 'src/app/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [APIService]
})
export class HomeComponent implements OnInit {
  
    constructor(private apiService: APIService) { }

    ngOnInit(): void {
       
    }
    ngOnDestroy(): void {
      
    }
  
}
