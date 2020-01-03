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

  async getStatsCategories() {
    this.statsCategories = await this.statsService.getStatsCategories();
  }

  async getStatistics() {
    this.statsForEachPlayer = await this.statsService.getStatistics();
  }
}
