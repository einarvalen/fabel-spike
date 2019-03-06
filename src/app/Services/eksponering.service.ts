import { GrunnData } from './../models/grunndata.model';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Eksponering } from '../models/eksponering.model';
import * as faker from 'faker/locale/nb_NO';

@Injectable({
  providedIn: 'root'
})
export class EksponeringService {
  private _eksponeringer: Eksponering[];
  constructor() { 
    this._eksponeringer = Array.from({length :100}, (_, k) => createEksponering(k+1));
  }
  GetExponeringer(): Observable<Eksponering[]> {
    return of(this._eksponeringer);
  }
}


function createEksponering(idCounter: number): Eksponering {
  const iktlosn = GrunnData.iktlosninger[Math.floor(Math.random() * 13)];
  return {
         id: idCounter,
         iktlosning: iktlosn,
         eksponeringid: 'EKSPID' + (Math.floor(Math.random() * 5000)+10000).toString(), // EksponeringsID
         beskrivelse: faker.company.catchPhrase(), // Interaksjonsmønster
         e_host: GrunnData.eksponertehoster[Math.floor(Math.random() * 10)], // (Eksponert) Hostnavn 
         e_port: (Math.floor(Math.random() * 5000)+10000).toString(), // (Eksponert) Port 
         e_uri: '/eksponert/' + iktlosn.toLowerCase().trim().replace(' ',''), // (Eksponert) URI 
         rp_uri: '/rp/' + iktlosn.toLowerCase().trim().replace(' ',''), // RP (Eksponert) URI 
         lb_host: GrunnData.lbhoster[Math.floor(Math.random() * 10)], 
         lb_port: (Math.floor(Math.random() * 5000)+10000).toString(),
         lb_uri: '/lastbalansert/'+ iktlosn.toLowerCase().trim().replace(' ','') ,
         meldingsstr: '',
         klientsertref: '',
         serversertref: '',
         merknad_1: '',
         merknad_2: '',
         merknad_3: '',
         merknad_4: '',
         bestillingsnr: idCounter,
         identitetsbarer: '',
         authentiseringsstyrke: '',
         identitetsleverandor: '',
         interaksjon: '',
         innholdstype: '',
         gradering: '',
         eksponeringsrute: '',
         tilgangspolicy: ''
  }
}
