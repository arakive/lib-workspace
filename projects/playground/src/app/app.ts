import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RocketButton } from 'rocket-lib/button';
import { RocketCard } from 'rocket-lib/card';
import { ColDef, GetDataSource, RocketDataTable } from 'rocket-lib/data-table';
import { of } from 'rxjs';
import { ELEMENT_DATA } from './mocks/mocks';
import { PeriodicElement } from './models/periodic-element.interface';

@Component({
  imports: [RouterOutlet, RocketButton, RocketCard, RocketDataTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('playground');

  protected readonly dataSource = new GetDataSource<PeriodicElement>(() =>
    of({ records: ELEMENT_DATA, totalRecords: ELEMENT_DATA.length }),
  );

  columns: ColDef<PeriodicElement>[] = [
    { key: 'position', label: 'Position' },
    { key: 'name', label: 'Name' },
    { key: 'weight', label: 'Weight' },
    { key: 'symbol', label: 'Symbol' },
  ];
}
