import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiMenuComponent } from './mai-menu.component';

describe('MaiMenuComponent', () => {
  let component: MaiMenuComponent;
  let fixture: ComponentFixture<MaiMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaiMenuComponent]
    });
    fixture = TestBed.createComponent(MaiMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
