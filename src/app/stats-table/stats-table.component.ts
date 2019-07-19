import { Component, OnInit } from '@angular/core';
import {StatsService} from '../stats.service';
import {StatsCategory} from '../objectClasses/statsCategory';
import {Player} from '../objectClasses/player';
import {Statistic} from '../objectClasses/statistic';

@Component({
  selector: 'app-stats-table',
  templateUrl: './stats-table.component.html',
  styleUrls: ['./stats-table.component.css']
})
export class StatsTableComponent implements OnInit {
  statsCategories: StatsCategory[];
  players: Player[];
  statistics: Statistic[];

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStatsCategories();
    this.getPlayers();
    this.getStatistics();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.statsCategories = categories);
  }

  getPlayers(): void {
    this.statsService.getPlayers()
      .subscribe(players => this.players = players);
  }

  getStatistics(): void {
    this.statsService.getStatistics()
      .subscribe(statistics => this.statistics = statistics);
  }
}
