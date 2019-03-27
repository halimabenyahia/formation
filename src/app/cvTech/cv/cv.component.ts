import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/Modele/personne';
import { PremierService } from 'src/app/service/premier.service';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes :Personne [] ;
  selectedPersonne : Personne ;
  constructor( private cvService : CvService) { }

  ngOnInit() {
    this.personnes=this.cvService.getPersonne();
    //this.PremierService.addData('data from cv component') ;
    //this.PremierService.logger(this.personnes);
  }

 

  selectPersonne(personne){
   this.selectedPersonne = personne ;
  }

}
