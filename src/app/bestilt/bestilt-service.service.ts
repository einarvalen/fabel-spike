import { Bestilling } from './../models/bestilling.model';
import { BestillingService} from './../Services/bestilling.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestiltServiceService {
  private bestiltMap = new Map<number, Bestilling>();
  private lastid: number = 0;
  private selectionMadeSubject = new Subject<any>();
  private selectedBestilt: Bestilling = null;
  private service: BestillingService = new BestillingService();
  private data: Bestilling[];

  constructor() { 
    this.service.getBestillinger("exteva").subscribe((dta) => {
      this.data = dta;
    });
    this.data.forEach( e => {
      this.bestiltMap.set(e.id, e);
      this.lastid = e.id > this.lastid ? e.id : this.lastid;
    });
  }

  getSelectedBestilt(): Bestilling {
    return this.selectedBestilt;
  }

  setSelectedBestilt(bestilling: Bestilling): void {
    this.selectedBestilt = bestilling;
  }

  sendSelectMadeMessage(message: boolean) {
      this.selectionMadeSubject.next(message);
  }

  getSelectMadeMessage(): Observable<any> {
      return this.selectionMadeSubject.asObservable();
  }

  nextId(): number {
    this.lastid += 1;
    return this.lastid;
  }

  getBestilt(): Bestilling[] {
    return Array.from(this.bestiltMap.values());
  }
  
  remove(bestilling: Bestilling): void {
    this.bestiltMap.delete(bestilling.id);
  }
  
  add(bestilling: Bestilling): void {
    this.bestiltMap.set(bestilling.id, bestilling);
  }

  update(bestilling: Bestilling): void {
    this.bestiltMap.set(bestilling.id, bestilling);
  }
  
}

