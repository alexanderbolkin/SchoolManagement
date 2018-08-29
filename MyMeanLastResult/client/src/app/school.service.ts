import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: Http) { }
  
   //retrieving SchoolService
   getSchools()
   {
     return this.http.get('http://localhost:3000/api/schools')
       .map(res =>res.json());
   }

  //add school method
  addSchool(newSchool)
  {
    console.log(newSchool);
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    
    return this.http.post('http://localhost:3000/api/school', newSchool, {headers:headers})
      .map(res =>res.json());
  }

  //delete method
  deleteSchool(id)
  {
    console.log(String(id));
    return this.http.delete('http://localhost:3000/api/school/'+id)
      .map(res =>res.json());
  }
}

