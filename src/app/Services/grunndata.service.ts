import { GrunnData } from './../models/grunndata.model';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrunndataService {

  constructor() { }
  GetIktLosninger(): Observable<string[]> {

    
    return of(GrunnData.iktlosninger);
  }
}


