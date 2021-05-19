import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempNameComponent } from './temp-name.component';

describe('TempNameComponent', () => {
  let component: TempNameComponent;
  let fixture: ComponentFixture<TempNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
