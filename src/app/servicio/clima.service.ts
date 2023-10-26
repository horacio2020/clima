import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = "8f8f8c1fa8abb8be7bed1ef3ee0cc14e";

  constructor(private http: HttpClient) { }

  clima(cuidad:string): Observable<any> {

    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${'ciudad'}&mode=json&units=metric&appid=${this.key}`)
  }
}
