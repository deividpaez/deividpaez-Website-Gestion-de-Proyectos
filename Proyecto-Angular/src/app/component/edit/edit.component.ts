import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import  {Global} from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';  
@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../../../assets/styles.css','../create/create.component.css'],
  providers: [ProjectService,UploadService]
})
export class EditComponent implements OnInit {
 public title: string;
  public project: any;
  public save_project: any;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string
 //  public urlImage: String;
 constructor(
   private _projectService: ProjectService,
   private _upLoadService: UploadService,
   private _route: ActivatedRoute,
   private _router: Router
 ) { 
  this.title = "Editar Proyecto";
  this.status ="";
  this.project=Project;
  this.filesToUpload =[]
  this.url = Global.URL
 }
 ngOnInit(): void {
  this._route.params.subscribe((params): void =>{
    let id = params.id;
    this.getProject(id);
  })
}

getProject(id:any){
   this._projectService.getProject(id).subscribe(
      response=>{
           this.project = response.project;
      },
      error =>{
        console.log(<any>error)
      }
   )
}
onSubmit(form: any){
    
  this._projectService.updateProject(this.project).subscribe(
    response =>{
     if(response.project){
  

      if(this.filesToUpload){
    //Subir Imagen
    this._upLoadService.makeFileRequest(Global.URL+'Upload/'+response.project._id,[], this.filesToUpload, 'Imagen')
    .then((result:any) =>{
     this.save_project = result.project; 
     this.status = "succes";
      
      
    })
   
      }else{
        this.save_project = response.project; 
        this.status = "succes";
      }
   
     }else{
       this.status = "failed";
     }
    },error =>{
      console.log(<any>error)
    }
  )
}
fileChangeEvent(fileInput: any){
  this.filesToUpload =<Array<File>>fileInput.target.files;
   }

 
}
