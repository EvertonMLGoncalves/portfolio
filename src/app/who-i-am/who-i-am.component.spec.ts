import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhoIAmComponent } from './who-i-am.component';

describe('WhoIAmComponent', () => {
  let fixture: ComponentFixture<WhoIAmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoIAmComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
    fixture = TestBed.createComponent(WhoIAmComponent);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
