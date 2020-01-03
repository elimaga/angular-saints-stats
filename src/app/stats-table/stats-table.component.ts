import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { StatsCategory } from '../objectClasses/statsCategory';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
  statsCategories: StatsCategory[];
  statsForEachPlayer = [];
  objectValues = Object.values;

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.getStatsCategories(() => {});
    this.getStatistics(() => { });
  }

  getStatsCategories(callback): void {
    this.statsService.getStatsCategories()
      .then(categories => {
        this.statsCategories = categories;
        callback();
      });
  }

  getStatistics(callback): void {
    this.statsService.getStatistics().then(statistics => {
      this.statsForEachPlayer = statistics;
      callback();
    });
  }
}
