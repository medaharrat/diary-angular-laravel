import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.component.html',
  styleUrls: ['./diary-edit.component.css'],
})
export class DiaryEditComponent implements OnInit {
  diary = new Diary();
  msg = "";

  constructor(
    private diaryService: DiaryService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      await this.diaryService.getDiary(+id)
      .then((data) => {
        this.diary = data;
      })
      .catch((error) => {
        console.log(error);
        this.msg = "Oops! Are you sure this diary exists?";
      });
    }
  }

  formatDate = (date) => {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    return (y + "-" + m + "-" + d);
  }
  
  async handleSave(diary: Diary): Promise<void> {
    if (this.diary.id) {
      await this.diaryService.updateDiary(this.diary.id, diary);
      this.location.back();
    } else {
      diary.date = this.formatDate(new Date());
      await this.diaryService.addDiary(diary);
      this.router.navigate(['/diaries']);
    }
  }
}
