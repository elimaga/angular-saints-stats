import {Component, OnInit} from '@angular/core';
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
  statistics;

  constructor(private statsService: StatsService) {
  }

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

      const statisticsFromDB: Statistic[][] = [];

      players.forEach((player) => {
        this.statsService.getStatisticsByPlayer(player.id)
          .subscribe(statistics => {
            statistics.sort((stat1, stat2) => {
              return stat1.categoryId - stat2.categoryId;
            });

            statisticsFromDB.push(statistics);
          });
      });

      const calculatedStats = statisticsFromDB.map(statistics => {
        return {};
      });
    });
  }
}
