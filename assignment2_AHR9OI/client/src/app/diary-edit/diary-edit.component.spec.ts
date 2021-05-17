import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryEditComponent } from './diary-edit.component';

describe('DiaryEditComponent', () => {
  let component: DiaryEditComponent;
  let fixture: ComponentFixture<DiaryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
