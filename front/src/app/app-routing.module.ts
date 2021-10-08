import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { EditComponent } from './etudiant/edit/edit.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NewetudiantComponent } from './etudiant/newetudiant/newetudiant.component';
import { ShowComponent } from './etudiant/show/show.component';

const routes: Routes = [
  {path:'',component:EtudiantComponent},
  {path:'newetudiant',component:NewetudiantComponent},
  {path:'newclasse',component:ClasseComponent},
  {path:'etudiant/edit/:id',component:EditComponent},
  {path:'etudiant/show/:id',component:ShowComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
