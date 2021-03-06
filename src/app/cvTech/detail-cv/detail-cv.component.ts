import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Modele/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne : Personne ;
  constructor(private embaucheService : EmbaucheService) { }

  ngOnInit() {
  }

  embaucher(){
    this.embaucheService.embaucher(this.personne);

  }

}
