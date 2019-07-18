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
  statsCategoriesInThrees: StatsCategory[][];

  constructor(private statsService: StatsService) {
    this.statsCategoriesInThrees = [];
  }

  ngOnInit(): void {
    this.getStatsCategories();
  }

  private splitCategoriesIntoGroupsOfThree(statsCategories: StatsCategory[]): void {
    let outerArrayIndex = -1;
    statsCategories.forEach((category, index) => {
      if (index % 3 === 0) {
        this.statsCategoriesInThrees.push([]);
        outerArrayIndex++;
      }

      this.statsCategoriesInThrees[outerArrayIndex].push(category);
    });
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.splitCategoriesIntoGroupsOfThree(categories));
  }
}
