import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';
import {Router} from "@angular/router";
import {Data} from '../../../school';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: Data;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private dataService: DataService) { }

  ngOnInit() 
  {
    let userId = localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  //   this.dataService.getUserById(+userId)
  //     .subscribe( data => {
  //       this.editForm.setValue(data);
  //     });
  // }

  // onSubmit() {
  //   this.dataService.updateData(this.editForm.value)
  //     .pipe(first())
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['tables']);
  //       },
  //       error => {
  //         alert(error);
  //       });
  // 
  }
}

