import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrieDetailComponent } from './pastrie-detail.component';

describe('PastrieDetailComponent', () => {
  let component: PastrieDetailComponent;
  let fixture: ComponentFixture<PastrieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastrieDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastrieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
