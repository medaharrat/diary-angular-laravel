import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {

  filteredDiaries: Diary[] = [];
  app_title = 'Diary App';
  app_description = 'This web application goes under the Web Engineering subject. It is a form of a Diary Saver, where users can view, add, edit and delete diaries. The application is developed in Angular and the data is fetched from a REST API hosted by a laravel local server.';
  earliest_date = "";
  latest_date = "";

  constructor(private diaryService: DiaryService) {}

  async ngOnInit(): Promise<void> {
    this.filteredDiaries = await this.diaryService.getDiaries().then((diaries) => {
      return diaries.filter((diary) => {
        this.earliest_date = diaries[diaries.length-1].date;
        this.latest_date = diaries[0].date;
        return diary.date >= this.earliest_date && diary.date <= this.latest_date;
      })
    });
  }
}
