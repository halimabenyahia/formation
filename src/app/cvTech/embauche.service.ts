import { Injectable } from '@angular/core';
import { Personne } from 'src/app/Modele/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private personnes : Personne[] ;

  constructor() {
    this.personnes=[] ;
   }
//recuperer l'esnsemble des personnes embauché //
   getEmbauchees(): Personne[]{
     return this.personnes ;
   }
//embaucher personne
   embaucher(personne : Personne) : void{
     const index = this.personnes.indexOf(personne) ;
     if (index<0) {
     this.personnes.push(personne);
     }
     else {
       alert('${personne.name} est déja sélectionne');
     }
    
   }

   debaucher(personne) : void{
     const index=this.personnes.indexOf(personne) ;
     if (index>=0){
       this.personnes.splice(index , 1) ;
     }
      
   }
}
