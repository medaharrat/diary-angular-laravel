import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from '../diary';
import { DiaryService } from '../diary.service';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css'],
})
export class DiaryDetailComponent implements OnInit {
  diary = new Diary();
  msg = "";

  constructor(
    private diaryService: DiaryService, 
    private route: ActivatedRoute, 
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.SpinnerService.show();  
    await this.diaryService.getDiary(id)
    .then((data) => {
      this.diary = data;
      this.SpinnerService.hide(); 
    })
    .catch((error) => {
      this.SpinnerService.hide(); 
      console.log(error);
      this.msg = "Oops! Are you sure this diary exists? Try adding a new one.";
    });
  }

  async handleDelete(): Promise<void> {
    await this.diaryService.deleteDiary(this.diary.id);
    this.router.navigate(['/diaries']);
  }
}
