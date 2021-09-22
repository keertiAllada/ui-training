import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class fetchservice {

  private url = 'http://localhost:8080/find'
  private url2 = 'http://localhost:8080/updateemp'
  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(this.url);
  }

}
