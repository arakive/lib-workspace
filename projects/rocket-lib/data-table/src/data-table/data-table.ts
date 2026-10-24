import { CdkTableModule } from '@angular/cdk/table';
import { booleanAttribute, Component, computed, input, signal } from '@angular/core';
import { GetDataSource } from '../dataSource';

@Component({
  imports: [CdkTableModule],
  selector: 'rocket-data-table',
  styleUrl: './data-table.css',
  templateUrl: './data-table.html',
})
export class RocketDataTable<T> {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = input.required<GetDataSource<T>>();
  noPagination = input(false, { transform: booleanAttribute });
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
