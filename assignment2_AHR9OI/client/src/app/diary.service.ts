import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diary } from './diary';

const httpOptions = {
  headers: new HttpHeaders({
    // Authorization: `Bearer 4|sBh5GPRaPQ2SmDcEQ3sasXk45sCuKubyNHkRYkeA`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private diaryUrl = 'http://localhost:8000/api/diaries';

  constructor(private http: HttpClient) {}

  public getDiaries(): Promise<Diary[]> {
    return this.http.get<Diary[]>(this.diaryUrl, httpOptions).toPromise();
  }

  public getDiary(id: number): Promise<Diary> {
    return this.http.get<Diary>(`${this.diaryUrl}/${id}`, httpOptions).toPromise();
  }

  public updateDiary(id: number, data: Diary): Promise<Diary> {
    return this.http.put<Diary>(`${this.diaryUrl}/${id}`, data, httpOptions).toPromise();
  }

  public addDiary(newDiary: Diary): Promise<Diary> {
    return this.http.post<Diary>(this.diaryUrl, newDiary, httpOptions).toPromise();
  }

  public deleteDiary(id: number): Promise<Diary> {
    return this.http.delete<Diary>(`${this.diaryUrl}/${id}`, httpOptions).toPromise();
  }
}
