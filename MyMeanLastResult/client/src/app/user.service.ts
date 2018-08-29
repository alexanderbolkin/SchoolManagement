import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  //retrieving user
  getUsers()
  {
    return this.http.get('http://localhost:3000/api/users')
      .map(res =>res.json());
  }

  //add User method
  // addUser(newUser)
  addUser(newUser)
  {
    // console.log(newUser);
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/user', newUser, {headers:headers})
      .map(res =>res.json());
      
  }
  editUser(id) 
  {
    return this.http.get(`${this.uri}/user/edit/${id}`);
  }

  updateUser(username, email,id) 
  {
    const obj = {
                  username: username,
                  email: email,
                };

    this
        .http
        .post(`${this.uri}/user/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
  }

  //delete method
  deleteUser(id)
  {
    console.log(String(id));
    return this.http.delete('http://localhost:3000/api/user/'+id)
      .map(res =>res.json());
  }
}



