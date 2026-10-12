import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketCard } from './card';

@Component({
  selector: 'test-host',
  template: `
    <rocket-card>
      <div title>Mi título</div>
      <p>Contenido del card</p>
    </rocket-card>
  `,
  imports: [RocketCard],
})
class TestHostComponent {}

describe('RocketCard', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project the title content from a title attribute', () => {
    const title = fixture.nativeElement.querySelector('.card-title');
    expect(title?.textContent?.trim()).toContain('Mi título');
  });
});
