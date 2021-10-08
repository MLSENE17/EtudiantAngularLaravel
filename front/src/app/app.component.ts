import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { EtudiantService } from './Service/Etudiant/etudiant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ameth:any
  formSeach = new FormGroup({
    search:new FormControl('')
  })
  constructor(private etudiantService:EtudiantService,private title:Title){
    this.title.setTitle('Accueil Etudiant');
  }
  searchEtudiant(){
    if(this.formSeach.value.search.length>1){
      document.querySelector("#search")?.classList.add('show')
      this.getAllEtudiant()
    }else{
      document.querySelector("#search")?.classList.remove('show')
      this.ameth=null;
    }
  }
  getAllEtudiant(){
    this.etudiantService.searchEtudiant(this.formSeach.value).subscribe(
      (res)=>{
           this.ameth = res
      }
    )
  }
  
}
