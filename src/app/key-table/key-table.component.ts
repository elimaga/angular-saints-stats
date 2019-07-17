import {Component, OnInit} from '@angular/core';

import { StatsService } from '../stats.service';
import { StatsCategory } from '../statsCategory';

@Component({
  selector: 'app-key-table',
  templateUrl: './key-table.component.html',
  styleUrls: ['./key-table.component.css']
})
export class KeyTableComponent implements OnInit {
  title = 'Key';
  statsCategories: StatsCategory[];

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.getStatsCategories();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(statsCategories => this.statsCategories = statsCategories);
  }
}
