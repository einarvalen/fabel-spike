import { MatIconModule } from '@angular/material';
import { GrunnData } from './../models/grunndata.model';
import { Observable, from, of } from 'rxjs';
import { Lastbalansering } from './../models/lastbalansering.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastbalanseringService {
  private lb: Lastbalansering[];

  constructor() { 
    this.lb = Array.from({length :100}, (_, k) => createLb(k+1));
  }
  getLb(): Observable<Lastbalansering[]> {
    return of(this.lb);
  }
}

function createLb(autoId: number): Lastbalansering {
  return {
    id:  autoId,
    protokoll: 'http',
    host: GrunnData.lbhoster[Math.floor(Math.random() * 10)], 
    appservers: [{hostnavn: 'appserveri-01', driftslokasjon:'dc1'},{hostnavn: 'appserveri-02', driftslokasjon:'dc2'}], 
  }
}
