import { Lastbalansering } from './../models/lastbalansering.model';
import { Component, OnInit } from '@angular/core';
import { HeroesServiceService } from './heroes-service.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  displayedColumns = ['id', 'host', 'protokoll'];
  selectedHero: Lastbalansering;

  getHeroes(): Lastbalansering[] {
    return this.messageService.getHeroes();
  }
  
  onSelect(lb: Lastbalansering): void {
    console.log("HeroListComponent.onSelect()");
    this.selectedHero = lb;
    this.messageService.setSelectedHero(lb);
    this.messageService.sendSelectMadeMessage(true);
  }
  
  constructor(private messageService: HeroesServiceService) { 
    console.log("HeroesListComponent  constructor");
  }

  ngOnInit() {
  }

}
