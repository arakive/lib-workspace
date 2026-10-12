import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketDataTable } from './data-table';

describe('RocketDataTable', () => {
  let component: RocketDataTable;
  let fixture: ComponentFixture<RocketDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketDataTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketDataTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
