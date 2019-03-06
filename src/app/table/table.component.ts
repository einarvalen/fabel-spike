import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Eksponering } from './../models/eksponering.model';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  selectedExp: Eksponering;

  constructor(public dialog: MatDialog, public dataSource: TableDataSource) {}

  displayedColumns = ['id', 'e_host', 'e_port', 'e_uri'];

  ngOnInit() {
    this.dataSource.setPaginator(this.paginator);
    this.dataSource.setSort(this.sort);
  }

  getRows(): Eksponering[] {
    return this.dataSource.getData();
  }

  onSelect(exp: Eksponering): void {
    console.log("TableComponent.onSelect()");
    this.dataSource.setSelectedExp(exp.id);
    this.selectedExp = this.dataSource.getSelectedExp();
    const dialogRef = this.dialog.open(EksponeringDialog, {
      width: '700px',
      data: this.selectedExp
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("TableComponent.afetClosed() - ");
      const exp:Eksponering = result;
      //console.log("TableComponent.afetClosed() - " + exp.e_host);
    })
  }
  onSubmit(): void {
    console.log("TableComponent.onsubmit()");
  }

}

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table.component.dialog.html',
  styleUrls: ['./table.component.css']
})
export class EksponeringDialog implements OnInit {
  formTitle = "Ajourhold Eksponering";
  public expForm = this.fb.group({
    id: [null, Validators.nullValidator],
    tilgangspolicy: [null, Validators.nullValidator],
    eksponeringsrute: [null, Validators.nullValidator],
    gradering : [null, Validators.nullValidator],
    innholdstype : [null, Validators.nullValidator],
    interaksjon : [null, Validators.nullValidator],
    identitetsleverandor : [null, Validators.nullValidator],
    authentiseringsstyrke : [null, Validators.nullValidator],
    identitetsbarer : [null, Validators.nullValidator],
    bestillingsnr : [null, Validators.nullValidator],
    merknad_4 : [null, Validators.nullValidator],
    merknad_3 : [null, Validators.nullValidator],
    merknad_2 : [null, Validators.nullValidator],
    merknad_1 : [null, Validators.nullValidator],
    serversertref : [null, Validators.nullValidator],
    klientsertref : [null, Validators.nullValidator],
    meldingsstr : [null, Validators.nullValidator],
    lb_uri : [null, Validators.nullValidator],
    lb_port : [null, Validators.nullValidator],
    lb_host : [null, Validators.nullValidator],
    rp_uri : [null, Validators.nullValidator],
    e_uri : [null, Validators.nullValidator],
    e_port : [null, Validators.nullValidator],
    e_host : [null, Validators.nullValidator],
    beskrivelse : [null, Validators.nullValidator],
    eksponeringid : [null, Validators.nullValidator]
  });

  constructor(private fb: FormBuilder, private dataSource: TableDataSource,
    public dialogRef: MatDialogRef<EksponeringDialog>,
    @Inject(MAT_DIALOG_DATA) expForm: FormGroup) {}
/*     @Inject(MAT_DIALOG_DATA) public data: Eksponering) {} */

  ngOnInit() {
    const exp = this.dataSource.getSelectedExp();
    console.log("EksponeringDialog.onInit()");
    this.expForm.setValue({ id : exp.id, eksponeringid: exp.eksponeringid, beskrivelse : exp.beskrivelse, e_host : exp.e_host, e_port : exp.e_port, e_uri : exp.e_uri, rp_uri : exp.rp_uri, lb_host : exp.lb_host, lb_port : exp.lb_port, lb_uri : exp.lb_uri, meldingsstr : exp.meldingsstr, klientsertref : exp.klientsertref, serversertref : exp.serversertref, merknad_1 : exp.merknad_1, merknad_2 : exp.merknad_2, merknad_3 : exp.merknad_3, merknad_4 : exp.merknad_4, bestillingsnr : exp.bestillingsnr, identitetsbarer : exp.identitetsbarer, authentiseringsstyrke : exp.authentiseringsstyrke, identitetsleverandor : exp.identitetsleverandor, interaksjon : exp.interaksjon, innholdstype : exp.innholdstype, gradering : exp.gradering, eksponeringsrute : exp.eksponeringsrute, tilgangspolicy : exp.tilgangspolicy });
  }

  onSubmit(): void {
    let exp:Eksponering = this.expForm.value;
    console.log("EksponeringDialog.onSubmit()" + JSON.stringify(exp));
    this.dataSource.update(exp);
    this.dialogRef.close();
  }

  onAdd(): void {
    console.log("EksponeringDialog.onAdd()");
    this.expForm.setValue({ id : this.dataSource.nextId(), eksponeringid: '', beskrivelse : '', e_host : '', e_port : '', e_uri : '', rp_uri : '', lb_host : '', lb_port : '', lb_uri : '', meldingsstr : '', klientsertref : '', serversertref : '', merknad_1 : '', merknad_2 : '', merknad_3 : '', merknad_4 : '', bestillingsnr : '', identitetsbarer : '', authentiseringsstyrke : '', identitetsleverandor : '', interaksjon : '', innholdstype : '', gradering : '', eksponeringsrute : '', tilgangspolicy : '' });
  }
  
  onDelete(): void {
    let exp:Eksponering = this.expForm.value;
    console.log("EksponeringDialog.onDelete()" + JSON.stringify(exp));
    this.dataSource.remove(exp);
    this.dialogRef.close();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
//eksponeringid beskrivelse e_host e_port e_uri rp_uri lb_host lb_port lb_uri meldingsstr klientsertref serversertref merknad_1 merknad_2 merknad_3 merknad_4 bestillingsnr identitetsbarer authentiseringsstyrke identitetsleverandor interaksjon innholdstype gradering eksponeringsrute tilgangspolicy 
