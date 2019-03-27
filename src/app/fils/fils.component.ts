import { Component, OnInit, Input, EventEmitter , Output } from '@angular/core';


@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter
  constructor() { }

  ngOnInit() {

    console.log('fils component : voici le contenu de la variable color de mon pere' ,this.filsProperty) ;
    
  }

 // sendEvent(){
   //this.sendRequestToData.emit( value = ' please can i have some money ');

  //}

}
