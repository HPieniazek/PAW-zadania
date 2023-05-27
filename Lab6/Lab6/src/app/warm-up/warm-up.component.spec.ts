import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmUpComponent } from './warm-up.component';

describe('WarmUpComponent', () => {
  let component: WarmUpComponent;
  let fixture: ComponentFixture<WarmUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarmUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarmUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
