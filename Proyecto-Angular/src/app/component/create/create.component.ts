import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import  {Global} from 'src/app/services/global'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css', '../../../assets/styles.css'],
  providers: [ProjectService,UploadService]
})
export class CreateComponent implements OnInit {
   public title: string;
   public project: Project;
   public save_project: any;
   public status: string;
   public filesToUpload: Array<File>;
   public url: string;
  //  public urlImage: String;
  constructor(
    private _projectService: ProjectService,
    private _upLoadService: UploadService
  ) { 
   this.title = "Crear Proyecto";
   this.project = new Project('','','','','','','');
   this.status ="";
   this.filesToUpload =[]
   this.url = Global.URL;
  }

  ngOnInit(): void {
  }
  onSubmit(form: any){
    
    this._projectService.saveProject(this.project).subscribe(
      response =>{
       if(response.project){
        console.log(response.project)
         console.log(this.filesToUpload)
         //Subir Imagen
         if(this.filesToUpload){
          this._upLoadService.makeFileRequest(Global.URL+'Upload/'+response.project._id,[], this.filesToUpload, 'Imagen')
         .then((result:any) =>{
          this.save_project = result.project; 
          this.status = "succes";
           
            form.reset()
         })
         }else{
          this.save_project = response.project; 
          this.status = "succes";
           form.reset()
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
