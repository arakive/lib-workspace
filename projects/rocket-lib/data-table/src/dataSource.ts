import { DataSource } from '@angular/cdk/collections';
import { computed, signal } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, switchMap } from 'rxjs';

export type RequestParams = { page: number; pageSize: number } & Record<string, any>;
export interface Paginated<T> {
  records: T[];
  totalRecords: number;
}

export class GetDataSource<T> extends DataSource<T> {
  private readonly requestFn: (params: RequestParams) => Observable<Paginated<T>>;
  sort = new BehaviorSubject<{ active: string; direction: 'asc' | 'desc' | '' }>({
    active: '',
    direction: '',
  });
  filters = new BehaviorSubject<{ [key: string]: any }>({});
  page = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(10);

  sort$ = this.sort.asObservable();
  filters$ = this.filters.asObservable();
  page$ = this.page.asObservable();
  pageSize$ = this.pageSize.asObservable();

  paginatedData = signal<Paginated<T> | undefined>(undefined);
  data = computed<T[] | undefined>(() => this.paginatedData()?.records);
  totalRecords = computed<number | undefined>(() => this.paginatedData()?.totalRecords);

  constructor(requestFn: (params: RequestParams) => Observable<Paginated<T>>) {
    super();
    this.requestFn = requestFn;
  }

  connect(): Observable<T[]> {
    return combineLatest([this.sort$, this.filters$, this.page$, this.pageSize$]).pipe(
      map(([sort, filters, page, pageSize]) => ({ ...sort, ...filters, page, pageSize })),
      switchMap((params) =>
        this.requestFn(params).pipe(
          map((response) => {
            this.paginatedData.set(response);
            return response.records;
          }),
        ),
      ),
    );
  }

  changePageTo(page: number) {
    this.page.next(page);
  }

  changePageSizeTo(pageSize: number) {
    this.pageSize.next(pageSize);
  }

  disconnect() {}
}
