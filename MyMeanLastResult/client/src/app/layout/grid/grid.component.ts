import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {DataService} from '../../data.service';
import {Data} from '../../school';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()],
    providers:[DataService]
})
export class GridComponent implements OnInit 
{

    datas:Data[]; //on init(formatted data will store in here)
    data:Data;
    
    school_id: Number;
    year: Number;
    month: Number;
    week: Number;
    elect_eur: Number;
    elect_kwh: Number;
    heating_eur: Number;
    heating_kwh: Number;
    water_eur: Number;
    water_litre: Number;

    constructor(private dataService: DataService) {}

    SaveSchoolData()
    {
        const newData ={
          school_id:this.school_id,
          year:this.year,
          month:this.month,
          week:this.week,
          elect_eur:this.elect_eur,
          elect_kwh:this.elect_kwh,
          heating_eur:this.heating_eur,
          heating_kwh:this.heating_kwh,
          water_eur:this.water_eur,
          water_litre:this.water_litre
        }

       
        this.dataService.addData(newData)
        .subscribe(data=>{
          this.datas.push(data); ///new object create by  push.
          // console.log(this.datas);
          this.dataService.getDatas()  //created data getting
          .subscribe(datas =>this.datas = datas);
          
        });
      }
    ngOnInit() {
      this.dataService.getDatas() //getting data will send to viewpage  by using subscribe.(onInit is formating function)
        .subscribe(datas => this.datas = datas);
        //console.log(this.datas);
    }
}