import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private statsCategoriesUrl = 'api/statsCategories';

  constructor(private http: HttpClient) { }
}
