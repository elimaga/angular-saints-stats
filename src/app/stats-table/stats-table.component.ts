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
    this.getStatsCategories();
    this.getStatistics();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.statsCategories = categories);
  }

  getStatistics(): void {
    this.statsService.getStatistics()
      .subscribe(statistics => this.statsForEachPlayer = statistics);
  }
}
