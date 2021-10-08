import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classe } from 'src/app/Models/Classe';
import { HostNameService } from '../Etudiant/host-name.service';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  constructor(private host:HostNameService,private http:HttpClient) { }
  postClass(classe:Classe){
     return this.http.post(this.host.getHost()+'classe',classe)
  }
}
