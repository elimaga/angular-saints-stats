import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsCategory } from './statsCategory';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsCategoriesUrl = 'api/statsCategories';

  constructor(private http: HttpClient) { }

  getStatsCategories(): Observable<StatsCategory[]> {
    return this.http.get<StatsCategory[]>(this.statsCategoriesUrl);
  }
}
