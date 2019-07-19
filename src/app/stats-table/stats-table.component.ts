import { Component, OnInit } from '@angular/core';
import {StatsService} from '../stats.service';
import {StatsCategory} from '../statsCategory';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
  statsCategories: StatsCategory[];

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStatsCategories();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.statsCategories = categories);
  }

}
