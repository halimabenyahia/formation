import { Component, OnInit } from '@angular/core';
import { PremierService } from '../service/premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers : [PremierService]
})
export class ColorComponent implements OnInit {

  color : "red" ;
  constructor( private PremierService : PremierService) { }

  ngOnInit() {
  }
  processRequest(message : any){
    alert(message) ;
  }

  loggerMesData(){
    this.PremierService.logger('test');
  }

  
}
