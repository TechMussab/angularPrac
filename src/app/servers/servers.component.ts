import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: '[app-servers]',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAdd=false
  creationStatus='';

  sName='asd';

  constructor() {
    setTimeout(
      ()=>{
        this.allowAdd=true;
      },1000
    );
  }
  onCreateServer()
  {
    this.creationStatus='added '+this.sName
    alert(this.creationStatus)
    setTimeout(()=>{
      this.creationStatus=''
    },2000);
  }
  ngOnInit() {
  }
  onUpdateServer(event:any)
  {
    this.sName=event.target.value;
  }

}
