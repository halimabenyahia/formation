import { Injectable } from '@angular/core';
import { Personne } from '../Modele/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes : Personne[];
  constructor() { 
    this.personnes = [
      new Personne(  1 , 'benyahia' ,  'halima' ,  23, 'halima.png',  777777 , 'etudiant' ),
      new Personne(  2 , 'benyahia' ,  'malek' ,  26, 'h2.jpg',  888888 , 'ingénieur' )
    ];
  }

  getPersonne() : Personne[] {
    return this.personnes ;
  }
}
