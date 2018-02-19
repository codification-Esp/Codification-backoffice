import { Component, OnInit } from '@angular/core';
import { BatimentApi, Batiment } from '../../shared/sdk';
import { FormBuilder, FormGroup,FormControl,NgForm } from '@angular/forms';

@Component({
  selector: 'app-pavillon-form',
  templateUrl: './pavillon-form.component.html',
  styleUrls: ['./pavillon-form.component.css']
})
export class PavillonFormComponent implements OnInit {
  batiments: Batiment[];
  form : FormGroup;
  batiment : Batiment;

  constructor(private batimentService:BatimentApi,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      nomBatiment :['']
    });
}

addBatiment():void{
  this.batimentService.create(this.batiment).subscribe(batiment=> {
    this.batiments.push(batiment);
    console.log('Create ok');
;
})
}
}
