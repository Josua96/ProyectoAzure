import { Component } from '@angular/core';

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


  constructor(){

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
    }
  
    fileReader.readAsText(this.file,"UTF-8");

  }

 // makeRequest

}
