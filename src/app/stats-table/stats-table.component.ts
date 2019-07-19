import { Component, OnInit } from '@angular/core';
import {StatsService} from '../stats.service';
import {StatsCategory} from '../objectClasses/statsCategory';
import {Player} from '../objectClasses/player';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
  statsCategories: StatsCategory[];
  players: Player[];

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStatsCategories();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.statsCategories = categories);
  }

  getPlayers(): void {
    this.statsService.getPlayers()
      .subscribe(players => this.players = players);
  }
}
