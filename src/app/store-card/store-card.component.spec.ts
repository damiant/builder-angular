import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoreCardComponent } from './store-card.component';

describe('StoreCardComponent', () => {
  let component: StoreCardComponent;
  let fixture: ComponentFixture<StoreCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
