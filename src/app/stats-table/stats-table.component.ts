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
  statistics;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.getStatsCategories();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.statsCategories = categories);
  }

  private getPlayers(callback): void {
    this.statsService.getPlayers()
      .subscribe(players => callback(players));
  }

  getPlayersAndTheirStatistics(): void {
    this.getPlayers((players) => {
      players.sort((player1, player2) => {
        return player1.id - player2.id;
      });

      this.statistics = players.map(player => {
        return {
          '#': player.id,
          player: player.name
        };
      });
    });
  }
}
