import { Eksponering } from './../models/eksponering.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { EksponeringService } from './../Services/eksponering.service';
import { Injectable, ViewChild } from '@angular/core';

export class TableItem extends Eksponering {
}

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
@Injectable({
  providedIn: 'root'
})
export class TableDataSource extends DataSource<TableItem> {
  service: EksponeringService = new EksponeringService();
  data: TableItem[];
  private expMap = new Map<number, Eksponering>();
  private lastid: number = 0;
  private selectedExp: Eksponering;
  private paginator: MatPaginator; 
  private sort: MatSort

  constructor() {
    super();
    this.service.GetExponeringer().subscribe((dta) => {
      this.data = dta;
    });
    this.data.forEach( e => {
      this.expMap.set(e.id, e);
      this.lastid = e.id > this.lastid ? e.id : this.lastid;
    });
  }

  setSort(sort: MatSort): void {
    this.sort = sort;
  }

  setPaginator(paginator: MatPaginator): void {
    this.paginator = paginator;
  }

  getData(): Eksponering[] {
    return Array.from(this.expMap.values());
  }

  nextId(): number {
    this.lastid += 1;
    return this.lastid;
  }

  remove(exp: Eksponering): void {
    this.expMap.delete(exp.id);
  }
  
  add(exp: Eksponering): void {
    this.expMap.set(exp.id, exp);
  }

  update(exp: Eksponering): void {
    this.expMap.set(exp.id, exp);
  }

  setSelectedExp(id: number): void {
    this.selectedExp = this.expMap.get(id);
    console.log("TableDatasource.setSelectedExp(): "+ JSON.stringify(this.selectedExp));
  }

  getSelectedExp(): Eksponering {
    return this.selectedExp;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'beskrivelse': return compare(a.beskrivelse, b.beskrivelse, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
