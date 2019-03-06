import { AppComponent } from './../app.component';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GrunnData} from './../models/grunndata.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  selectedIktlosn: string = null;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  getIktLosninger(): string[] {
    return GrunnData.iktlosninger;
  }

  getTitle(): string {
    return AppComponent.title;
  }

  onSelect(iktlosn: string): void {
    this.selectedIktlosn = iktlosn;
  }
}
