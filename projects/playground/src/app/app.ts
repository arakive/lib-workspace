import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RocketButton } from 'rocket-lib/button';
import { RocketCard } from 'rocket-lib/card';
import { GetDataSource, RocketDataTable } from 'rocket-lib/data-table';
import { of } from 'rxjs';
import { ELEMENT_DATA } from './mocks/mocks';

@Component({
  imports: [RouterOutlet, RocketButton, RocketCard, RocketDataTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('playground');

  protected readonly dataSource = new GetDataSource(() => of(ELEMENT_DATA));
}
