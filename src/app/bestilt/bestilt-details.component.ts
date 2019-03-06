import { Bestilling } from './../models/bestilling.model';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BestiltServiceService } from './bestilt-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-update-bestilt-details',
  templateUrl: './bestilt-details.component.html',
  styleUrls: ['./bestilt-details.component.css']
})
export class BestiltDetailsComponent implements OnDestroy {
  private subscription: Subscription;
  formTitle = "Endre Bestilling";
  private bestiltForm = this.fb.group({
    id: [null, Validators.nullValidator],
    stat : [null, Validators.compose([Validators.required])],
    sikkerhetsniva : [null, Validators.compose([Validators.required])],
    miljo : [null, Validators.compose([Validators.required])],
    kontaktperson : [null, Validators.compose([Validators.required])],
    pobref : [null, Validators.compose([Validators.required])],
    beskrivelse : [null, Validators.compose([Validators.required])],
    opprettetDato : [null, Validators.compose([Validators.required])]
  });
  isUpdateForm(): boolean { return true; }

  onAdd(): void {
    this.messageService.sendSelectMadeMessage(false);
  }
  
  onDelete(): void {
    const best:Bestilling = this.bestiltForm.value;
    this.messageService.remove(best);
  }
  
  onSubmit(): void {
    const best:Bestilling = this.bestiltForm.value;
    this.messageService.update(best);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private fb: FormBuilder, private messageService: BestiltServiceService) { 
    console.log("BestiltDetailsComponent  constructor");
    const best = this.messageService.getSelectedBestilt();
    this.bestiltForm.setValue({ id: best.id, opprettetDato : best.opprettetDato, beskrivelse : best.beskrivelse , pobref : best.pobref , kontaktperson : best.kontaktperson , miljo : best.miljo , sikkerhetsniva : best.sikkerhetsniva , stat: best.stat})
    this.subscription = this.messageService.getSelectMadeMessage().subscribe(selectionMade => {
      console.log("BestiltDetailsComponent.getselectMessage()");
      if (selectionMade) {
        const best = this.messageService.getSelectedBestilt();
        this.bestiltForm.setValue({ id: best.id, opprettetDato : best.opprettetDato, beskrivelse : best.beskrivelse , pobref : best.pobref , kontaktperson : best.kontaktperson , miljo : best.miljo , sikkerhetsniva : best.sikkerhetsniva , stat: best.stat})
        console.log("BestiltDetailsComponent.selectionMade");
      }
    });
    console.log(this.bestiltForm);;
  }

}

@Component({
  selector: 'app-create-bestilt-details',
  templateUrl: './bestilt-details.component.html',
  styleUrls: ['./bestilt-details.component.css']
})
export class BestiltCreateFormComponent {
  formTitle = "Registrere ny Bestilling";
  private bestiltForm = this.fb.group({
    stat : [null, Validators.compose([Validators.required])],
    sikkerhetsniva : [null, Validators.compose([Validators.required])],
    miljo : [null, Validators.compose([Validators.required])],
    kontaktperson : [null, Validators.compose([Validators.required])],
    pobref : [null, Validators.compose([Validators.required])],
    beskrivelse : [null, Validators.compose([Validators.required])],
    opprettetDato : [null, Validators.compose([Validators.required])]
  });
  isUpdateForm(): boolean { return false; }

  onSubmit(): void {
    let best:Bestilling = this.bestiltForm.value;
    best.id = this.messageService.nextId();
    this.messageService.add(best);
    this.bestiltForm.setValue({ opprettetDato : '', beskrivelse : '', pobref : '', kontaktperson : '', miljo : '', sikkerhetsniva : '', stat: ''})
  }

  constructor(private fb: FormBuilder, private messageService: BestiltServiceService) { 
    console.log("BestiltCreateFormComponent  constructor");
    this.bestiltForm.setValue({ opprettetDato : '', beskrivelse : '', pobref : '', kontaktperson : '', miljo : '', sikkerhetsniva : '', stat: ''})
  }

}

