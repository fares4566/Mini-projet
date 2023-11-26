import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/service/weather.service';
import { TunisiaStates } from 'src/app/enum/TunisiaStates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  devises$!:Observable<any>;
  myForm!: FormGroup;
  tunisiaStates = Object.values(TunisiaStates);
  myweather!:String;

  localtime!:String;
  wind!:number;
  waterrise!:number;
  cloud!:number;
  constructor(private weather:WeatherService,private fb: FormBuilder){}
  ngOnInit(): void {
    this.weather.weather('tunis').subscribe(
      data =>{
        this.myweather=data.current.temp_c;
          
               this.localtime=data.location.localtime.substring(data.location.localtime.length-5);
               this.wind=data.current.wind_kph;
               this.waterrise=data.current.pressure_mb;
               this.cloud=data.current.cloud;
      } );
    this.devises$ = this.weather.getweather();
      this.myForm = this.fb.group({
        State: [TunisiaStates.Tunis] 
      });
  }
  weatherAffiche(){
    this.weather.weather(this.myForm.controls['State'].value).subscribe(
      data => {this.myweather=data.current.temp_c;
         
               this.localtime=data.location.localtime.substring(data.location.localtime.length-5);
               this.wind=data.current.wind_kph;
               this.waterrise=data.current.pressure_mb;
               this.cloud=data.current.cloud;

      } );
  }
  

  
 


}
