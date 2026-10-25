import { CdkTableModule } from '@angular/cdk/table';
import { booleanAttribute, Component, computed, input, linkedSignal, signal } from '@angular/core';
import { GetDataSource } from '../dataSource';

export type ColumnKey<T> = Extract<keyof T, string>;

export interface ColDef<T> {
  key: ColumnKey<T>;
  label?: string;
}

@Component({
  imports: [CdkTableModule],
  selector: 'rocket-data-table',
  styleUrl: './data-table.css',
  templateUrl: './data-table.html',
})
export class RocketDataTable<T> {
  dataSource = input.required<GetDataSource<T>>();
  noPagination = input(false, { transform: booleanAttribute });
  columns = input.required<ColDef<T>[]>();
  displayedColumns = linkedSignal(() => this.columns().map((col) => col.key));
  protected readonly page = signal(1);
  protected readonly pageSize = signal(25);
  protected readonly totalRecords = computed(() => this.dataSource().totalRecords());
  protected readonly pagesCount = computed(() =>
    this.totalRecords() ? Math.ceil(this.totalRecords()! / this.pageSize()) : 0,
  );

  changePageTo(page: number) {
    this.page.set(page);
    this.dataSource().changePageTo(page);
  }

  changePageSizeTo(pageSize: number) {
    this.pageSize.set(pageSize);
    this.dataSource().changePageSizeTo(pageSize);
  }
}
