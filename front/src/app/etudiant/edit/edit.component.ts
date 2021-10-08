import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/Service/Etudiant/etudiant.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  alerte = false;
  errorEmail =false;
  classes:any;
  id:any;
  etudiants:any;
  formModal :any
  constructor(private route:ActivatedRoute,private router : Router,private etudiantService :EtudiantService,private etudiant:Etudiant,private titlte:Title) { 
      this.titlte.setTitle("Edit etudiant")
      this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getClasse();
    this.getEtudiants()
  }
  onSubmit(){
    this.toEtudiant();
    this.EditpostFrontEtudiant(this.etudiant)
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
  EditpostFrontEtudiant(etudiant:Etudiant){
    this.etudiantService.EditpostEtudiant(etudiant,this.id).subscribe(
      (res)=>{
        this.router.navigate([''])
      },
      (error)=>{
        document.querySelector("#email")?.classList?.replace('is-valid','is-invalid');
        this.errorEmail = true;
      }
    )
  }
  getEtudiants(){
    this.etudiantService.getOneEtudiant(this.id).subscribe(
      (res) =>{
        this.etudiants =res;
        this.formModal = new FormGroup({
          prenom: new  FormControl(this.etudiants.prenom,[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]),
          nom:  new  FormControl(this.etudiants.nom,[Validators.required,Validators.minLength(2),Validators.pattern('[a-zA-Z ]*')]),
          email: new  FormControl(this.etudiants.email,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          classe_id:  new  FormControl('',[Validators.required]),
        })
      },
      (error)=>{
        this.router.navigate([''])
      }
    );
  }

}
