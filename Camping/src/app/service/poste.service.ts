import { Injectable } from '@angular/core';
import { Camping } from '../class/camping';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL="http://localhost:3000/camping";
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  constructor(private http:HttpClient) { }
  getCamping():Observable<Camping[]>{
    return this.http.get<Camping[]>(URL);
  }
  addCamping(c:Camping):Observable<Camping>{
    return this.http.post<Camping>(URL,c);
  }
  DeleteCamp(id:number){
    return this.http.delete(URL+"/"+id);
  }
  UpdateCamp(c:Camping):Observable<Camping>{
    return this.http.put<Camping>(URL+'/'+c.id,c);
  }
  
  
}
