import { Lastbalansering } from './../models/lastbalansering.model';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HeroesServiceService } from './heroes-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-update-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnDestroy {
  private subscription: Subscription;
  formTitle = "Endre Lastbalansering";
  private heroForm = this.fb.group({
    id: [null, Validators.nullValidator],
    host: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
    protokoll: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
  });
  isUpdateForm(): boolean { return true; }

  onAdd(): void {
    this.messageService.sendSelectMadeMessage(false);
  }
  
  onDelete(): void {
    const lb:Lastbalansering = this.heroForm.value;
    this.messageService.remove(lb);
  }
  
  onSubmit(): void {
    const lb:Lastbalansering = this.heroForm.value;
    this.messageService.update(lb);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  constructor(private fb: FormBuilder, private messageService: HeroesServiceService) { 
    console.log("HeroDetailsComponent  constructor");
    const lb = this.messageService.getSelectedHero();
    this.heroForm.setValue({ id: lb.id, host: lb.host, protokoll: lb.protokoll})
    this.subscription = this.messageService.getSelectMadeMessage().subscribe(selectionMade => {
      console.log("HeroDetailsComponent.getselectMessage()");
      if (selectionMade) {
        const lb = this.messageService.getSelectedHero();
        this.heroForm.setValue({ id: lb.id, host: lb.host, protokoll: lb.protokoll})
        console.log("HeroDetailsComponent.selectionMade");
      }
    });
    console.log(this.heroForm);;
  }

}

@Component({
  selector: 'app-create-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroCreateFormComponent {
  formTitle = "Registrere ny Lastbalansering";
  private heroForm = this.fb.group({
    host: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
    protokoll: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
  });
  isUpdateForm(): boolean { return false; }

  onSubmit(): void {
    let hero:Lastbalansering = this.heroForm.value;
    hero.id = this.messageService.nextId();
    this.messageService.add(hero);
    //this.heroForm.setValue({ host: '', protokoll: ''})
  }

  constructor(private fb: FormBuilder, private messageService: HeroesServiceService) { 
    console.log("HeroCreateFormComponent  constructor");
    this.heroForm.setValue({ host: '', protokoll: ''})
  }

}

