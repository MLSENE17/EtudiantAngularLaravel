import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { HostNameService } from './host-name.service';

@Injectable()
export class EtudiantService{
  constructor(private http:HttpClient,private hostService:HostNameService) { }
  getBackEtudiants(){
     return this.http.get(this.hostService.getHost());
  }
  getBackClasses(){
    return this.http.get(this.hostService.getHost()+'classe');
  }
  postEtudiant(etudiant:Etudiant){
    return this.http.post(this.hostService.getHost()+'create',etudiant);
  }
  EditpostEtudiant(etudiant:Etudiant,id:number){
    return this.http.put(this.hostService.getHost()+'update/'+id,etudiant);
  }
  getOneEtudiant(id:number){
     return this.http.get(this.hostService.getHost()+'edit/'+id);
  }
  getShowEtudiant(id:number){
    return this.http.get(this.hostService.getHost()+'show/'+id);
  }
  deleteEtudiant(id:number){
    return this.http.delete(this.hostService.getHost()+'delete/'+id);
  }
  searchEtudiant(datas:any){
    return this.http.post(this.hostService.getHost()+'search',datas)
  }
}
