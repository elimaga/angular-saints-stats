import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsCategory } from './objectClasses/statsCategory';
import { Player } from './objectClasses/player';
import { Statistic } from './objectClasses/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsCategoriesUrl = 'api/statsCategories';
  private playersUrl = 'api/players';
  private statisticsUrl = 'api/statistics';

  constructor(private http: HttpClient) { }

  getStatsCategories(): Observable<StatsCategory[]> {
    return this.http.get<StatsCategory[]>(this.statsCategoriesUrl);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }

  getStatistics(): Observable<Statistic[]> {
    return this.http.get<Statistic[]>(this.statisticsUrl);
  }
}
