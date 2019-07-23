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
  statistics = [];

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.getStatsCategories();
    this.getPlayersAndTheirStatistics();
  }

  getStatsCategories(): void {
    this.statsService.getStatsCategories()
      .subscribe(categories => this.sortCategoriesAndSave(categories));
  }

  getPlayersAndTheirStatistics(): void {
    this.getPlayers((players) => this.sortPlayersAndGetTheirStats(players));
  }

  private sortPlayersAndGetTheirStats(players) {
    players.sort((player1, player2) => {
      return player1.id - player2.id;
    });

    players.forEach((player) => {
      this.statsService.getStatisticsByPlayer(player.id)
        .subscribe(statistics => this.sortStatisticsAndSaveInArray(statistics, player));
    });
  }

  private sortStatisticsAndSaveInArray(statistics, player) {
    statistics.sort((stat1, stat2) => {
      return stat1.categoryId - stat2.categoryId;
    });

    const errorTwoDecimals = '.--';
    const errorThreeDecimals = '.---';

    const plateAppearances = statistics[18].value;
    const walks = statistics[7].value + statistics[12].value;
    const atBats = plateAppearances - walks - statistics[11].value - statistics[13].value - statistics[14].value;
    const totalBases = (statistics[2].value - statistics[3].value - statistics[4].value - statistics[5].value) +
      (2 * statistics[3].value) + (3 * statistics[4].value) + (4 * statistics[5].value);
    const sluggingPercentage = totalBases / atBats;
    const plateAppearancesNonSac = (atBats + walks + statistics[14].value);
    const onBasePercentage = (statistics[2].value + walks) / plateAppearancesNonSac;


    this.statistics.push({
      '#': player.id,
      player: player.name,
      G: statistics[0].value,
      AB: atBats,
      R: statistics[1].value,
      H: statistics[2].value,
      '2B': statistics[3].value,
      '3B': statistics[4].value,
      HR: statistics[5].value,
      RBI: statistics[6].value,
      BB: statistics[7].value,
      SO: statistics[8].value,
      SB: statistics[9].value,
      CS: statistics[10].value,
      AVG: atBats ? (statistics[2].value / atBats).toFixed(3) : errorThreeDecimals,
      OBP: plateAppearancesNonSac ? onBasePercentage.toFixed(3) : errorThreeDecimals,
      SLG: atBats ? sluggingPercentage.toFixed(3) : errorThreeDecimals,
      OPS: atBats && plateAppearancesNonSac ? (onBasePercentage + sluggingPercentage).toFixed(3) : errorThreeDecimals,
      IBB: statistics[11].value,
      HBP: statistics[12].value,
      SAC: statistics[13].value,
      SF: statistics[14].value,
      TB: totalBases,
      XBH: statistics[3].value + statistics[4].value + statistics[5].value,
      GDP: statistics[15].value,
      GO: statistics[16].value,
      AO: statistics[17].value,
      GO_AO: statistics[17].value ? (statistics[16].value / statistics[17].value).toFixed(2) : errorTwoDecimals,
      PA: plateAppearances
    });
  }

  private sortCategoriesAndSave(categories) {
    categories.sort((category1, category2) => {
      return category1.id - category2.id;
    });

    this.statsCategories = categories;
  }

  private getPlayers(callback): void {
    this.statsService.getPlayers()
      .subscribe(players => callback(players));
  }
}
