import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobData } from 'src/mobile-list';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private _url:string = '/assets/mobile.json';
  constructor(private http:HttpClient) { }
  getProd():Observable<MobData[]>{
      return this.http.get<MobData[]>(this._url);
    }
}
