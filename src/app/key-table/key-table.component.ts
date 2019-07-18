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
  statsCategoriesInThrees;

  constructor(private statsService: StatsService) {
    this.statsCategoriesInThrees = [];
  }

  ngOnInit(): void {
    this.getStatsCategories();
  }

  splitCategoriesIntoGroupsOfThree(statsCategories: StatsCategory[]): void {
    this.statsCategoriesInThrees = [];

    let outerArrayIndex = -1;
    statsCategories.forEach((category, index) => {
      console.log('inside the foreach', this.statsCategoriesInThrees);

      if (index % 3 === 0) {
        this.statsCategoriesInThrees.push([]);
        outerArrayIndex++;
      }

      this.statsCategoriesInThrees[outerArrayIndex].push(category);
    });
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(this.splitCategoriesIntoGroupsOfThree);
  }
}
