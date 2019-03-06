import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesServiceService } from './heroes-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private subscription: Subscription;
  selectionMade: boolean;

  constructor(private messageService: HeroesServiceService) { 
    console.log("HeroesComponent  constructor");
    this.subscription = this.messageService.getSelectMadeMessage().subscribe(selectionMade => {
      console.log("HeroesComponent.getSelectionMadeMessage()");
      this.selectionMade = selectionMade;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
