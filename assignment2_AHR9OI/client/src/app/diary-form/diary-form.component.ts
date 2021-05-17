import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css'],
})
export class DiaryFormComponent implements OnInit, OnChanges {
  @Input() diary: Diary;
  @Output() save = new EventEmitter<Diary>();

  constructor(private fb: FormBuilder) {}

  diaryForm = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });

  get title(): AbstractControl {
    return this.diaryForm.get('title');
  }
  get text(): AbstractControl {
    return this.diaryForm.get('text');
  }
  get date(): AbstractControl {
    return this.diaryForm.get('date');
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.diaryForm.patchValue(this.diary);
  }

  onSubmit(): void {
    console.log(this.diaryForm);
    if (this.diaryForm.valid) {
      this.save.emit(this.diaryForm.value);
    }
  }
}
