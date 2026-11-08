import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let fixture: ComponentFixture<FirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPageComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    fixture = TestBed.createComponent(FirstPageComponent);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
