import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from '../Models/Etudiant';
import { EtudiantService } from '../Service/Etudiant/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  etudiants: any;
  constructor(private etudiantService :EtudiantService) { }

  ngOnInit(): void {

    this.getEtudiants();
  }
  getEtudiants(){
    this.etudiantService.getBackEtudiants().subscribe(
      (res) =>{
        this.etudiants =res;
      }
    );
  }
  
  

}
