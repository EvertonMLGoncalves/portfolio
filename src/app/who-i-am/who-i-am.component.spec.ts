import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIAmComponent } from './who-i-am.component';

describe('WhoIAmComponent', () => {
  let component: WhoIAmComponent;
  let fixture: ComponentFixture<WhoIAmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIAmComponent]
    });
    fixture = TestBed.createComponent(WhoIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
