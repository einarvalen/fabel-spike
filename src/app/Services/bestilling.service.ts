import { Injectable } from '@angular/core';
import { Bestilling } from '../models/bestilling.model'
import { Observable, of } from 'rxjs';
import * as faker from 'faker/locale/nb_NO';
import { GrunnData } from '../models/grunndata.model';



@Injectable({
  providedIn: 'root'
})
export class BestillingService {
  private _bestillinger: Bestilling[];
  constructor() {
    this._bestillinger = Array.from({length :100}, (_, k) => createBestilling(k+1));
    this._bestillinger.forEach( (_bestilling) => {if (_bestilling.iktlosning.startsWith('Autosys')) _bestilling.kontaktperson = "Nils Johan Torp" });   
   }
  
   getBestillinger(bestiller :string): Observable<Bestilling[]> {

    
    return of(this._bestillinger.filter((_bestilling) => {return _bestilling.kontaktperson == "Nils Johan Torp" }));
  }

  getAlleBestillinger(numberOfRows: number, pagenumber: number ): Observable<Bestilling[]> {

    
    return of(this._bestillinger);
  }

  getBestilling(id : number): Bestilling {
    
    return null;

    
  }
}

function createBestilling(inId: number): Bestilling {
   return {
   id: inId,
   opprettetDato : faker.date.between('2015-01-01', '2019-03-31'),
    iktlosning:GrunnData.iktlosninger[Math.floor(Math.random() * 13)],
    beskrivelse:faker.company.catchPhrase(),
    pobref:'POB-' + (Math.floor(Math.random() * 5000)+10000).toString(),
    kontaktperson:faker.name.findName(),
    miljo:GrunnData.miljoer[Math.floor(Math.random() * 3)],
    sikkerhetsniva:GrunnData.sikkerhetsnivaer[Math.floor(Math.random() * 4)],
    stat: GrunnData.statuser[Math.floor(Math.random() * 3)]
  }
}

