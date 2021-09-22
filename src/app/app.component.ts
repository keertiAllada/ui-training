import { Component } from '@angular/core';
import { fetchservice } from './fetchservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assgn';
  tableData:any=''

  constructor(private fetchService:fetchservice){

  }
  findAll(){

  this.fetchService.getData().subscribe(data=>this.tableData=JSON.stringify(data))

  }

}
