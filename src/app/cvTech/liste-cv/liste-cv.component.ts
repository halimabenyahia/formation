import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Modele/personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() personne : Personne [] ;
  @Output() selectedPersonne = new EventEmitter() ;

  constructor() { }

  ngOnInit() {
  }

  selectPersonne(selectedPersonne){
    //console.log(selectedPersonne);
    this.selectedPersonne.emit(
      selectedPersonne
    ) ;
  }
}
