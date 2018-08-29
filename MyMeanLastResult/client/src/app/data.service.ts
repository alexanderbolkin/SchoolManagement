import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  //retrieving SchoolService
  getDatas()
  {
    return this.http.get('http://localhost:3000/api/datas')
      .map(res =>res.json());
  }

  //add Data method
  addData(newData)
  {
    //  console.log(newData);
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/data', newData, {headers:headers})
      .map(res =>res.json());
      
  }

  
  //delete method
  deleteData(id)
  {
    console.log(String(id));
    return this.http.delete('http://localhost:3000/api/data/'+id)
      .map(res =>res.json());
  }
}
