import { Component, OnInit, OnDestroy } from '@angular/core';
import { BestiltServiceService } from './bestilt-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bestilt',
  templateUrl: './bestilt.component.html',
  styleUrls: ['./bestilt.component.css']
})
export class BestiltComponent implements OnInit {
  private subscription: Subscription;
  selectionMade: boolean;

  constructor(private messageService: BestiltServiceService) { 
    console.log("BestiltComponent  constructor");
    this.subscription = this.messageService.getSelectMadeMessage().subscribe(selectionMade => {
      console.log("BestiltComponent.getSelectionMadeMessage()");
      this.selectionMade = selectionMade;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
