import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryEditComponent } from './diary-edit/diary-edit.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'diaries',
    component: DiaryListComponent,
  },
  {
    path: 'diaries/new',
    component: DiaryEditComponent,
  },
  {
    path: 'diary/:id',
    component: DiaryDetailComponent,
  },
  {
    path: 'diary/:id/edit',
    component: DiaryEditComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
