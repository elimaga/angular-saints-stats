import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsCategory } from './objectClasses/statsCategory';
import { Player } from './objectClasses/player';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsCategoriesUrl = 'api/statsCategories';
  private playersUrl = 'api/players';

  constructor(private http: HttpClient) { }

  getStatsCategories(): Observable<StatsCategory[]> {
    return this.http.get<StatsCategory[]>(this.statsCategoriesUrl);
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }
}
