import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDialogModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTreeModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddressComponent } from './address/address.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent, EksponeringDialog } from './table/table.component'; 
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { TreeComponent } from './tree/tree.component';
import { TabsComponent } from './tabs/tabs.component'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatDividerModule} from '@angular/material/divider';
import { HeroDetailsComponent, HeroCreateFormComponent } from './heroes/hero-details.component';
import { HeroListComponent } from './heroes/hero-list.component'; 
import { BestiltComponent } from './bestilt/bestilt.component'; 
import { BestiltListComponent } from './bestilt/bestilt-list.component'; 
import { BestiltDetailsComponent, BestiltCreateFormComponent } from './bestilt/bestilt-details.component'; 

const appRoutes: Routes = [  
  { path: 'table', component: TableComponent },
  { path: 'address', component: AddressComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'dash', component: DashComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'bestilt', component: BestiltComponent },
  { path: 'tabs', component: TabsComponent }, 
  { path: 'tabs/:id', component: TabsComponent, data: { animation: 'hero' } }
];

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    NavComponent,
    TableComponent,
    EksponeringDialog,
    DashComponent,
    TreeComponent,
    TabsComponent,
    HeroesComponent,
    HeroDetailsComponent,
    HeroCreateFormComponent,
    HeroListComponent,
    BestiltComponent,
    BestiltDetailsComponent,
    BestiltCreateFormComponent,
    BestiltListComponent
  ],
  entryComponents: [EksponeringDialog],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
