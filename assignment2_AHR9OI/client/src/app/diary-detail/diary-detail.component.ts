import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css'],
})
export class DiaryDetailComponent implements OnInit {
  diary = new Diary();

  constructor(private diaryService: DiaryService, private route: ActivatedRoute, private router: Router) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.diary = await this.diaryService.getDiary(id);
  }

  async handleDelete(): Promise<void> {
    await this.diaryService.deleteDiary(this.diary.id);
    this.router.navigate(['/diaries']);
  }
}
