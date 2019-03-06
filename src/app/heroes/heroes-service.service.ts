import { Lastbalansering } from './../models/lastbalansering.model';
import { LastbalanseringService} from './../Services/lastbalansering.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  private heroMap = new Map<number, Lastbalansering>();
  private lastid: number = 0;
  private selectionMadeSubject = new Subject<any>();
  private selectedHero: Lastbalansering = null;
  private service: LastbalanseringService = new LastbalanseringService();
  private data: Lastbalansering[];

  constructor() { 
    this.service.getLb().subscribe((dta) => {
      this.data = dta;
    });
    this.data.forEach( e => {
      this.heroMap.set(e.id, e);
      this.lastid = e.id > this.lastid ? e.id : this.lastid;
    });
  }

  getSelectedHero(): Lastbalansering {
    return this.selectedHero;
  }

  setSelectedHero(lb: Lastbalansering): void {
    this.selectedHero = lb;
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

  getHeroes(): Lastbalansering[] {
    return Array.from(this.heroMap.values());
  }
  
  remove(lb: Lastbalansering): void {
    this.heroMap.delete(lb.id);
  }
  
  add(lb: Lastbalansering): void {
    this.heroMap.set(lb.id, lb);
  }

  update(lb: Lastbalansering): void {
    this.heroMap.set(lb.id, lb);
  }
  
}

