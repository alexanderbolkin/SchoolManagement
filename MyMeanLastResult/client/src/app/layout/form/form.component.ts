import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {SchoolService} from '../../school.service';
import {School} from '../../school';
import {AppComponent} from '../../app.component'
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()],
    providers: [SchoolService,AppComponent]
})
export class FormComponent implements OnInit {

    schools:School[];
    school:School;
    school_name:string;
    constructor(private schoolService: SchoolService){}

    addSchool()
    {
      const newSchool ={
        school_name:this.school_name
      }
      
      this.schoolService.addSchool(newSchool)

      .subscribe(school=>{
                          if (newSchool==null)
                          {
                            alert('please add the data');
                          }
                          else
                          {
                            this.schools.push(school);
                            alert('You added the data successfully');
                          }
                          
                          this.schoolService.getSchools().subscribe(schools => this.schools = schools);
      });
    }
    
  
    // deleteSchool(id:any)
    // {
    //   var schools = this.schools;
    //   this.schoolService.deleteSchool(id)
    //     .subscribe(data=>{
    //       if(data.n==1)
    //       {
    //         for(var i=0;i<schools.length;i++)
    //         {
    //           if(schools[i]._id == id)
    //           {
    //             schools.splice(i,1);
    //           }
    //         }
    //       }
    //     });
    // }
  
    ngOnInit() {
      this.schoolService.getSchools()
        .subscribe(schools => this.schools = schools);
    }
  }
  




