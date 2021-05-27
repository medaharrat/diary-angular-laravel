import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css'],
})
export class DiaryListComponent implements OnInit {
  diaries: Diary[] = [];
  status = 'ALL';
  selectedDiary: Diary = null;
  msg = "";

  constructor(private diaryService: DiaryService, 
    private SpinnerService: NgxSpinnerService) {}

  async ngOnInit(): Promise<void> {
    this.SpinnerService.show();  
    await this.diaryService.getDiaries()
    .then((data) => {
      this.diaries = data;
      this.SpinnerService.hide();
    })
    .catch((error) => {
      this.SpinnerService.hide();
      console.log(error);
      this.msg = "Oops! something happened. Try adding a new diary or refresh the page."
    });
  }

  handleSave(diary): void {
    Object.assign(this.selectedDiary, diary);
    this.selectedDiary = null;
  }
}
