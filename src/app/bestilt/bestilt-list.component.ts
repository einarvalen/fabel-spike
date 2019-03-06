import { Bestilling } from './../models/bestilling.model';
import { Component, OnInit } from '@angular/core';
import { BestiltServiceService } from './bestilt-service.service';

@Component({
  selector: 'app-bestilt-list',
  templateUrl: './bestilt-list.component.html',
  styleUrls: ['./bestilt-list.component.css']
})
export class BestiltListComponent implements OnInit {
  displayedColumns = ['id', 'opprettetDato', 'beskrivelse', 'miljo', 'stat'];
  selectedBestilt: Bestilling;

  getBestilt(): Bestilling[] {
    return this.messageService.getBestilt();
  }
  
  onSelect(best: Bestilling): void {
    console.log("BestiltListComponent.onSelect()");
    this.selectedBestilt = best;
    this.messageService.setSelectedBestilt(best);
    this.messageService.sendSelectMadeMessage(true);
  }
  
  constructor(private messageService: BestiltServiceService) { 
    console.log("BestiltListComponent  constructor");
  }

  ngOnInit() {
  }

}
