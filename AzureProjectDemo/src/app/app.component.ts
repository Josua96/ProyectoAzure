import { Component } from '@angular/core';
import { AzureDemoService } from './azure-demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AzureProjectDemo';

  public file:any= null;
  public lines:String[];

  public remainingRequest:number=0;
  public totalRequest:number=0;
  public finishedRequest:number=0;


  constructor(private queueService: AzureDemoService){

  }

  fileChanged(event):any{
    console.log("archivo ha cambiado");
    this.file= event.target.files[0];
  }

  readFileContent(){
    if (this.file===null){
      alert("Antes debe seleccinar un archivo con extension csv");
      return;
    }

    let fileReader = new FileReader();
    fileReader.onload = (e) => {

      console.log("contenido del archivo");
      console.log(fileReader.result);

    }

    fileReader.onloadend=()=>{

      this.lines = (fileReader.result as String).split('\r\n');
      console.log("lineas leídas");
      console.log(this.lines);
      this.makeRequest();
    }
  
    fileReader.readAsText(this.file,"UTF-8");

  }

  makeRequest(){

    let limit= this.lines.length;
    this.totalRequest= this.lines.length;
    this.remainingRequest=this.lines.length;

    for (let i=0; i < 3; i++ ){

      
      this.remainingRequest-=1;
      if (this.lines[i].length > 0){

      
      this.queueService.sendMessage(this.lines[i]).subscribe((response) =>{ 

        this.finishedRequest+=1;
        console.log("azure response");
        console.log(response);

      },
      (err) => {
        console.log(err.json()); 
      });
      
    }
      


    }

  }

}
