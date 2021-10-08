import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/Etudiant/etudiant.service';

@Component({
  selector: 'app-newetudiant',
  templateUrl: './newetudiant.component.html',
  styleUrls: ['./newetudiant.component.scss']
})
export class NewetudiantComponent implements OnInit {
  alerte = false;
  errorEmail =false;
  classes:any;
  formModal = new FormGroup({
    prenom: new  FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
    nom:  new  FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]),
    email: new  FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    classe_id:  new  FormControl('',[Validators.required]),
  })
  constructor(private router : Router,private etudiantService :EtudiantService,private etudiant:Etudiant,private titlte:Title) { 
      this.titlte.setTitle("Ajouter un etudiant")
    }
  ngOnInit(): void {
    this.getClasse();
  }
  onSubmit(){
    this.toEtudiant();
    this.postFrontEtudiant(this.etudiant)
  }
  get f(){
    return this.formModal.controls;
  }
  toEtudiant(){
    this.etudiant.prenom= this.formModal.value.prenom;
    this.etudiant.nom = this.formModal.value.nom;
    this.etudiant.email = this.formModal.value.email;
    this.etudiant.classe_id = this.formModal.value.classe_id;
  }
  getClasse(){
    return this.etudiantService.getBackClasses().subscribe(
      (res)=>{
        this.classes = res;
      }
    )
  }
  postFrontEtudiant(etudiant:Etudiant){
    this.etudiantService.postEtudiant(etudiant).subscribe(
      (res)=>{
        this.router.navigate([''])
      },
      (error)=>{
        document.querySelector("#email")?.classList?.replace('is-valid','is-invalid');
        this.errorEmail = true;
      }
    )
  }
}
