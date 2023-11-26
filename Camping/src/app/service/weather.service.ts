import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getweather():Observable<any>{
    const headers = new HttpHeaders({
			'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
			'x-rapidapi-key': 'f2b94f3919msh9ec1ae0af1b6c90p117f24jsn2d834a260479'
		});
		return this.http.get<any>('https://weatherapi-com.p.rapidapi.com/forecast.json', {
				headers: headers});
}
weather(location:string):Observable<any>{
	const URL= 'https://weatherapi-com.p.rapidapi.com/forecast.json';
	let params= new HttpParams();
	
	
	 params = params.append('q', location);
	const headers : HttpHeaders = new HttpHeaders({
	'X-RapidAPI-Key': 'f2b94f3919msh9ec1ae0af1b6c90p117f24jsn2d834a260479',
	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	})
	return this.http.get<any>(URL, {headers:headers, params: params});
	
}
}
