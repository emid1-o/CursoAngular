import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylecompComponent } from './stylecomp.component';

describe('StylecompComponent', () => {
  let component: StylecompComponent;
  let fixture: ComponentFixture<StylecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StylecompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
