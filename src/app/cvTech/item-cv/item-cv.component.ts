import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Modele/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne : Personne ;
  @Output() selectedPersonne = new EventEmitter() ;

  constructor() { }

  ngOnInit() {
  }

  selectPersonne(){
    //emettre un evenmnt et y injecter un personne
    this.selectedPersonne.emit(
      this.personne
    );

  }

}
