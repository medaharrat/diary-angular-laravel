import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DiaryDetailComponent } from './diary-detail/diary-detail.component';
import { DiaryEditComponent } from './diary-edit/diary-edit.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryDetailComponent,
    DiaryEditComponent,
    DiaryFormComponent,
    DiaryListComponent,
    MainPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
