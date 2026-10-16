import { CdkTableModule } from '@angular/cdk/table';
import { Component, input } from '@angular/core';
import { GetDataSource } from '../dataSource';

@Component({
  imports: [CdkTableModule],
  selector: 'rocket-data-table',
  styleUrl: './data-table.css',
  templateUrl: './data-table.html',
})
export class RocketDataTable {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = input.required<GetDataSource<unknown>>();
}
