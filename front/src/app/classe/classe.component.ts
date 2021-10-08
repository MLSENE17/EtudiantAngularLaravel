import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Classe } from '../Models/Classe';
import { ClasseService } from '../Service/Classe/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss']
})
export class ClasseComponent implements OnInit {
  formModal = new FormGroup(
    {
      libelle:  new  FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9 ]*')])
    }
  )
  constructor(private classeService:ClasseService,
    private route:Router,
    private classe:Classe,
    private title:Title) { 
      this.title.setTitle('New Classe')
    }
  get f(){
    return this.formModal.controls
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.classe.libelle = this.formModal.value.libelle
    this.classeService.postClass(this.classe).subscribe(
      (res)=>{
        this.route.navigate([''])
      },
      (error)=>{
        alert("libelle existe deja")
      }
    )
  }
}
