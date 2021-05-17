import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryListComponent } from './diary-list.component';

describe('DiaryListComponent', () => {
  let component: DiaryListComponent;
  let fixture: ComponentFixture<DiaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
