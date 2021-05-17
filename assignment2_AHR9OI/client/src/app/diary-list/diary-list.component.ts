import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css'],
})
export class DiaryListComponent implements OnInit {
  diaries: Diary[] = [];
  status = 'ALL';
  selectedDiary: Diary = null;

  constructor(private diaryService: DiaryService) {}

  async ngOnInit(): Promise<void> {
    this.diaries = await this.diaryService.getDiaries();
  }

  handleSave(diary): void {
    Object.assign(this.selectedDiary, diary);
    this.selectedDiary = null;
  }
}
