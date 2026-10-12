import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketLib } from './rocket-lib';

describe('RocketLib', () => {
  let component: RocketLib;
  let fixture: ComponentFixture<RocketLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketLib],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
