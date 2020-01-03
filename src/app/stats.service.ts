import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StatsCategory } from './objectClasses/statsCategory';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsCategoriesUrl = 'https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statscategories';
  private statisticsUrl = 'https://pksh7vt4mh.execute-api.us-west-1.amazonaws.com/test/statistics';

  constructor(private http: HttpClient) { }

  getStatsCategories(): Promise<StatsCategory[]> {
    return this.http.get<StatsCategory[]>(this.statsCategoriesUrl).toPromise();
  }

  getStatistics(): Promise<any[]> {
    return this.http.get<any[]>(this.statisticsUrl).toPromise();
  }
}
