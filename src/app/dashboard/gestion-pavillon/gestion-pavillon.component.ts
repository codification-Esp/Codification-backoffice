import { Component, OnInit } from '@angular/core';
import { BatimentApi, BatimentInterface, Batiment } from '../../shared/sdk';

@Component({
  selector: 'app-gestion-pavillon',
  templateUrl: './gestion-pavillon.component.html',
  styleUrls: ['./gestion-pavillon.component.css']
})
export class GestionPavillonComponent implements OnInit {
  batiments: any;
  constructor(private batimentService:BatimentApi) { }

  ngOnInit() {
    this.batimentService.find(
      {
        include:{
          relation: "etages",
          scope:{
            include :{
              relation:"chambres"
            }
          }
        }
      }
        ).subscribe(batiments => {
    this.batiments = batiments;
    })
  }

  getNbChambre(batiment:Batiment):number{
    let sum = 0;
    for(let etage of batiment.etages){
      sum += etage.chambres.length;
    }
    return sum;
  }

   
}
