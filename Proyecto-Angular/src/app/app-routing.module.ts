import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from './component/error/error.component';
import { DetailComponent } from './component/detail/detail.component';
import { EditComponent } from './component/edit/edit.component';
const routes: Routes = [
   {path: '', component: AboutComponent},
   {path: 'sobre_mi', component: AboutComponent},
   {path: 'proyectos', component: ProjectsComponent},
   {path: 'crear', component: CreateComponent},
   {path: 'contacto', component: ContactComponent},
   {path:  'proyecto/:id', component: DetailComponent},
   {path: 'editar-proyecto/:id', component:EditComponent},
   {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
