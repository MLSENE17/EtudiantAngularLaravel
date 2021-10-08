import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/Service/Etudiant/etudiant.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  etudiants: any;
  id:any;
  constructor(private router:Router,private route:ActivatedRoute,private etudiantService :EtudiantService) { 
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getEtudiants();
  }
  getEtudiants(){
    this.etudiantService.getShowEtudiant(this.id).subscribe(
      (res) =>{
        this.etudiants =res;
      }
    );
  }
  deleteEven(id:number){
      this.etudiantService.deleteEtudiant(this.id).subscribe(
         (res)=>{
           this.router.navigate([''])
         }
      )
  }

}
