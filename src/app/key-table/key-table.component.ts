import { Component } from '@angular/core';

import { StatsService } from '../stats.service';

@Component({
  selector: 'app-key-table',
  templateUrl: './key-table.component.html',
  styleUrls: ['./key-table.component.css']
})
export class KeyTableComponent {
  title = 'Key';

  constructor(private statsService: StatsService) { }

  getStatsCategories(): void {

  }
}
