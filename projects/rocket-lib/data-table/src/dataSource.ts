import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export class GetDataSource<T> extends DataSource<T> {
  private readonly requestFn: () => Observable<T[]>;

  constructor(requestFn: () => Observable<T[]>) {
    super();
    this.requestFn = requestFn;
  }

  connect(): Observable<T[]> {
    return this.requestFn();
  }

  disconnect() {}
}
