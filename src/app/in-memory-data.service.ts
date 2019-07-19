import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { StatsCategory } from './objectClasses/statsCategory';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  static genId(statsCategories: StatsCategory[]): number {
    return statsCategories.length > 0 ? Math.max(...statsCategories.map(category => category.id)) + 1 : 1;
  }

  createDb() {
    const statsCategories = [
      { id: 1, abbreviation: 'G', name: 'Games' },
      { id: 2, abbreviation: 'AB', name: 'At Bats' },
      { id: 3, abbreviation: 'R', name: 'Runs' },
      { id: 4, abbreviation: 'H', name: 'Hits' },
      { id: 5, abbreviation: '2B', name: 'Doubles' },
      { id: 6, abbreviation: '3B', name: 'Triples' },
      { id: 7, abbreviation: 'HR', name: 'Homeruns' },
      { id: 8, abbreviation: 'RBI', name: 'Runs Batted In' },
      { id: 9, abbreviation: 'BB', name: 'Base on Balls' },
      { id: 10, abbreviation: 'SO', name: 'Strikeouts' },
      { id: 11, abbreviation: 'SB', name: 'Stolen Bases' },
      { id: 12, abbreviation: 'CS', name: 'Caught Stealing' },
      { id: 13, abbreviation: 'AVG', name: 'Average' },
      { id: 14, abbreviation: 'OBP', name: 'On-Base Percentage' },
      { id: 15, abbreviation: 'SLG', name: 'Slugging Percentage' },
      { id: 16, abbreviation: 'OPS', name: 'On-Base Plus Slugging' },
      { id: 17, abbreviation: 'IBB', name: 'Intentional Walks' },
      { id: 18, abbreviation: 'HBP', name: 'Hit By Pitch' },
      { id: 19, abbreviation: 'SAC', name: 'Sacrifice Bunts' },
      { id: 20, abbreviation: 'SF', name: 'Sacrifice Flys' },
      { id: 21, abbreviation: 'TB', name: 'Total Bases' },
      { id: 22, abbreviation: 'XBH', name: 'Extra Base Hits' },
      { id: 23, abbreviation: 'GDP', name: 'Grounded Into Double Plays' },
      { id: 24, abbreviation: 'GO', name: 'Ground Outs' },
      { id: 25, abbreviation: 'AO', name: 'Fly Outs' },
      { id: 26, abbreviation: 'GO_AO', name: 'Ground Outs Per Fly Out' },
      { id: 27, abbreviation: 'PA', name: 'Plate Appearances' }
    ];
    const players = [
      { id: 3, name: 'Zeke' },
      { id: 4, name: 'Michael' },
      { id: 5, name: 'Dominic' },
      { id: 6, name: 'Eli' },
      { id: 8, name: 'Tony' },
      { id: 9, name: 'Art' },
      { id: 10, name: 'Taylor' },
      { id: 12, name: 'Santos' },
      { id: 16, name: 'Ryan' },
      { id: 18, name: 'Jesse' },
      { id: 19, name: 'Kolby' },
      { id: 20, name: 'Lupe' },
      { id: 23, name: 'Santana' },
      { id: 23, name: 'Sal' },
      { id: 48, name: 'Andrew' }
    ];
    const statistics = [
      { playerId: 3, categoryId: 1, value: 7 },
      { playerId: 3, categoryId: 3, value: 4 },
      { playerId: 3, categoryId: 4, value: 4 },
      { playerId: 3, categoryId: 5, value: 0 },
      { playerId: 3, categoryId: 6, value: 0 },
      { playerId: 3, categoryId: 7, value: 0 },
      { playerId: 3, categoryId: 8, value: 2 },
      { playerId: 3, categoryId: 9, value: 5 },
      { playerId: 3, categoryId: 10, value: 10 },
      { playerId: 3, categoryId: 11, value: 2 },
      { playerId: 3, categoryId: 12, value: 0 },
      { playerId: 3, categoryId: 17, value: 0 },
      { playerId: 3, categoryId: 18, value: 0 },
      { playerId: 3, categoryId: 19, value: 0 },
      { playerId: 3, categoryId: 20, value: 0 },
      { playerId: 3, categoryId: 23, value: 0 },
      { playerId: 3, categoryId: 24, value: 1 },
      { playerId: 3, categoryId: 25, value: 7 },
      { playerId: 3, categoryId: 27, value: 30 },
      { playerId: 4, categoryId: 1, value: 4 },
      { playerId: 4, categoryId: 3, value: 3 },
      { playerId: 4, categoryId: 4, value: 4 },
      { playerId: 4, categoryId: 5, value: 0 },
      { playerId: 4, categoryId: 6, value: 0 },
      { playerId: 4, categoryId: 7, value: 1 },
      { playerId: 4, categoryId: 8, value: 3 },
      { playerId: 4, categoryId: 9, value: 1 },
      { playerId: 4, categoryId: 10, value: 4 },
      { playerId: 4, categoryId: 11, value: 0 },
      { playerId: 4, categoryId: 12, value: 0 },
      { playerId: 4, categoryId: 17, value: 0 },
      { playerId: 4, categoryId: 18, value: 0 },
      { playerId: 4, categoryId: 19, value: 0 },
      { playerId: 4, categoryId: 20, value: 0 },
      { playerId: 4, categoryId: 23, value: 0 },
      { playerId: 4, categoryId: 24, value: 5 },
      { playerId: 4, categoryId: 25, value: 2 },
      { playerId: 4, categoryId: 27, value: 17 },
      { playerId: 5, categoryId: 1, value: 3 },
      { playerId: 5, categoryId: 3, value: 0 },
      { playerId: 5, categoryId: 4, value: 0 },
      { playerId: 5, categoryId: 5, value: 0 },
      { playerId: 5, categoryId: 6, value: 0 },
      { playerId: 5, categoryId: 7, value: 0 },
      { playerId: 5, categoryId: 8, value: 0 },
      { playerId: 5, categoryId: 9, value: 0 },
      { playerId: 5, categoryId: 10, value: 3 },
      { playerId: 5, categoryId: 11, value: 0 },
      { playerId: 5, categoryId: 12, value: 0 },
      { playerId: 5, categoryId: 17, value: 0 },
      { playerId: 5, categoryId: 18, value: 0 },
      { playerId: 5, categoryId: 19, value: 0 },
      { playerId: 5, categoryId: 20, value: 0 },
      { playerId: 5, categoryId: 23, value: 0 },
      { playerId: 5, categoryId: 24, value: 5 },
      { playerId: 5, categoryId: 25, value: 2 },
      { playerId: 5, categoryId: 27, value: 17 },
      { playerId: 6, categoryId: 1, value: 8 },
      { playerId: 6, categoryId: 3, value: 10 },
      { playerId: 6, categoryId: 4, value: 9 },
      { playerId: 6, categoryId: 5, value: 0 },
      { playerId: 6, categoryId: 6, value: 0 },
      { playerId: 6, categoryId: 7, value: 0 },
      { playerId: 6, categoryId: 8, value: 3 },
      { playerId: 6, categoryId: 9, value: 10 },
      { playerId: 6, categoryId: 10, value: 2 },
      { playerId: 6, categoryId: 11, value: 7 },
      { playerId: 6, categoryId: 12, value: 0 },
      { playerId: 6, categoryId: 17, value: 0 },
      { playerId: 6, categoryId: 18, value: 0 },
      { playerId: 6, categoryId: 19, value: 0 },
      { playerId: 6, categoryId: 20, value: 1 },
      { playerId: 6, categoryId: 23, value: 0 },
      { playerId: 6, categoryId: 24, value: 6 },
      { playerId: 6, categoryId: 25, value: 6 },
      { playerId: 6, categoryId: 27, value: 36 },
      { playerId: 8, categoryId: 1, value: 7 },
      { playerId: 8, categoryId: 3, value: 7 },
      { playerId: 8, categoryId: 4, value: 7 },
      { playerId: 8, categoryId: 5, value: 2 },
      { playerId: 8, categoryId: 6, value: 0 },
      { playerId: 8, categoryId: 7, value: 0 },
      { playerId: 8, categoryId: 8, value: 2 },
      { playerId: 8, categoryId: 9, value: 9 },
      { playerId: 8, categoryId: 10, value: 5 },
      { playerId: 8, categoryId: 11, value: 3 },
      { playerId: 8, categoryId: 12, value: 1 },
      { playerId: 8, categoryId: 17, value: 0 },
      { playerId: 8, categoryId: 18, value: 1 },
      { playerId: 8, categoryId: 19, value: 1 },
      { playerId: 8, categoryId: 20, value: 0 },
      { playerId: 8, categoryId: 23, value: 0 },
      { playerId: 8, categoryId: 24, value: 1 },
      { playerId: 8, categoryId: 25, value: 6 },
      { playerId: 8, categoryId: 27, value: 33 },
      { playerId: 9, categoryId: 1, value: 5 },
      { playerId: 9, categoryId: 3, value: 2 },
      { playerId: 9, categoryId: 4, value: 2 },
      { playerId: 9, categoryId: 5, value: 0 },
      { playerId: 9, categoryId: 6, value: 0 },
      { playerId: 9, categoryId: 7, value: 0 },
      { playerId: 9, categoryId: 8, value: 1 },
      { playerId: 9, categoryId: 9, value: 0 },
      { playerId: 9, categoryId: 10, value: 4 },
      { playerId: 9, categoryId: 11, value: 1 },
      { playerId: 9, categoryId: 12, value: 0 },
      { playerId: 9, categoryId: 17, value: 0 },
      { playerId: 9, categoryId: 18, value: 0 },
      { playerId: 9, categoryId: 19, value: 0 },
      { playerId: 9, categoryId: 20, value: 0 },
      { playerId: 9, categoryId: 23, value: 0 },
      { playerId: 9, categoryId: 24, value: 2 },
      { playerId: 9, categoryId: 25, value: 0 },
      { playerId: 9, categoryId: 27, value: 8 },
      { playerId: 10, categoryId: 1, value: 7 },
      { playerId: 10, categoryId: 3, value: 6 },
      { playerId: 10, categoryId: 4, value: 8 },
      { playerId: 10, categoryId: 5, value: 3 },
      { playerId: 10, categoryId: 6, value: 0 },
      { playerId: 10, categoryId: 7, value: 0 },
      { playerId: 10, categoryId: 8, value: 6 },
      { playerId: 10, categoryId: 9, value: 2 },
      { playerId: 10, categoryId: 10, value: 3 },
      { playerId: 10, categoryId: 11, value: 7 },
      { playerId: 10, categoryId: 12, value: 0 },
      { playerId: 10, categoryId: 17, value: 0 },
      { playerId: 10, categoryId: 18, value: 1 },
      { playerId: 10, categoryId: 19, value: 1 },
      { playerId: 10, categoryId: 20, value: 0 },
      { playerId: 10, categoryId: 23, value: 0 },
      { playerId: 10, categoryId: 24, value: 1 },
      { playerId: 10, categoryId: 25, value: 1 },
      { playerId: 10, categoryId: 27, value: 25 },
      { playerId: 12, categoryId: 1, value: 4 },
      { playerId: 12, categoryId: 3, value: 0 },
      { playerId: 12, categoryId: 4, value: 0 },
      { playerId: 12, categoryId: 5, value: 0 },
      { playerId: 12, categoryId: 6, value: 0 },
      { playerId: 12, categoryId: 7, value: 0 },
      { playerId: 12, categoryId: 8, value: 0 },
      { playerId: 12, categoryId: 9, value: 1 },
      { playerId: 12, categoryId: 10, value: 1 },
      { playerId: 12, categoryId: 11, value: 0 },
      { playerId: 12, categoryId: 12, value: 0 },
      { playerId: 12, categoryId: 17, value: 0 },
      { playerId: 12, categoryId: 18, value: 1 },
      { playerId: 12, categoryId: 19, value: 0 },
      { playerId: 12, categoryId: 20, value: 0 },
      { playerId: 12, categoryId: 23, value: 0 },
      { playerId: 12, categoryId: 24, value: 1 },
      { playerId: 12, categoryId: 25, value: 1 },
      { playerId: 12, categoryId: 27, value: 5 },
      { playerId: 16, categoryId: 1, value: 7 },
      { playerId: 16, categoryId: 3, value: 2 },
      { playerId: 16, categoryId: 4, value: 7 },
      { playerId: 16, categoryId: 5, value: 2 },
      { playerId: 16, categoryId: 6, value: 0 },
      { playerId: 16, categoryId: 7, value: 0 },
      { playerId: 16, categoryId: 8, value: 6 },
      { playerId: 16, categoryId: 9, value: 4 },
      { playerId: 16, categoryId: 10, value: 4 },
      { playerId: 16, categoryId: 11, value: 5 },
      { playerId: 16, categoryId: 12, value: 1 },
      { playerId: 16, categoryId: 17, value: 0 },
      { playerId: 16, categoryId: 18, value: 1 },
      { playerId: 16, categoryId: 19, value: 0 },
      { playerId: 16, categoryId: 20, value: 0 },
      { playerId: 16, categoryId: 23, value: 0 },
      { playerId: 16, categoryId: 24, value: 8 },
      { playerId: 16, categoryId: 25, value: 0 },
      { playerId: 16, categoryId: 27, value: 28 },
      { playerId: 18, categoryId: 1, value: 6 },
      { playerId: 18, categoryId: 3, value: 3 },
      { playerId: 18, categoryId: 4, value: 4 },
      { playerId: 18, categoryId: 5, value: 2 },
      { playerId: 18, categoryId: 6, value: 1 },
      { playerId: 18, categoryId: 7, value: 0 },
      { playerId: 18, categoryId: 8, value: 3 },
      { playerId: 18, categoryId: 9, value: 0 },
      { playerId: 18, categoryId: 10, value: 2 },
      { playerId: 18, categoryId: 11, value: 2 },
      { playerId: 18, categoryId: 12, value: 0 },
      { playerId: 18, categoryId: 17, value: 0 },
      { playerId: 18, categoryId: 18, value: 0 },
      { playerId: 18, categoryId: 19, value: 0 },
      { playerId: 18, categoryId: 20, value: 0 },
      { playerId: 18, categoryId: 23, value: 0 },
      { playerId: 18, categoryId: 24, value: 9 },
      { playerId: 18, categoryId: 25, value: 3 },
      { playerId: 18, categoryId: 27, value: 22 },
      { playerId: 19, categoryId: 1, value: 8 },
      { playerId: 19, categoryId: 3, value: 8 },
      { playerId: 19, categoryId: 4, value: 15 },
      { playerId: 19, categoryId: 5, value: 1 },
      { playerId: 19, categoryId: 6, value: 0 },
      { playerId: 19, categoryId: 7, value: 0 },
      { playerId: 19, categoryId: 8, value: 4 },
      { playerId: 19, categoryId: 9, value: 5 },
      { playerId: 19, categoryId: 10, value: 4 },
      { playerId: 19, categoryId: 11, value: 9 },
      { playerId: 19, categoryId: 12, value: 1 },
      { playerId: 19, categoryId: 17, value: 0 },
      { playerId: 19, categoryId: 18, value: 0 },
      { playerId: 19, categoryId: 19, value: 0 },
      { playerId: 19, categoryId: 20, value: 0 },
      { playerId: 19, categoryId: 23, value: 0 },
      { playerId: 19, categoryId: 24, value: 4 },
      { playerId: 19, categoryId: 25, value: 9 },
      { playerId: 19, categoryId: 27, value: 41 },
      { playerId: 20, categoryId: 1, value: 4 },
      { playerId: 20, categoryId: 3, value: 1 },
      { playerId: 20, categoryId: 4, value: 1 },
      { playerId: 20, categoryId: 5, value: 0 },
      { playerId: 20, categoryId: 6, value: 0 },
      { playerId: 20, categoryId: 7, value: 0 },
      { playerId: 20, categoryId: 8, value: 1 },
      { playerId: 20, categoryId: 9, value: 2 },
      { playerId: 20, categoryId: 10, value: 2 },
      { playerId: 20, categoryId: 11, value: 0 },
      { playerId: 20, categoryId: 12, value: 0 },
      { playerId: 20, categoryId: 17, value: 0 },
      { playerId: 20, categoryId: 18, value: 0 },
      { playerId: 20, categoryId: 19, value: 1 },
      { playerId: 20, categoryId: 20, value: 0 },
      { playerId: 20, categoryId: 23, value: 1 },
      { playerId: 20, categoryId: 24, value: 5 },
      { playerId: 20, categoryId: 25, value: 1 },
      { playerId: 20, categoryId: 27, value: 12 },
      { playerId: 22, categoryId: 1, value: 7 },
      { playerId: 22, categoryId: 3, value: 6 },
      { playerId: 22, categoryId: 4, value: 11 },
      { playerId: 22, categoryId: 5, value: 3 },
      { playerId: 22, categoryId: 6, value: 2 },
      { playerId: 22, categoryId: 7, value: 0 },
      { playerId: 22, categoryId: 8, value: 7 },
      { playerId: 22, categoryId: 9, value: 3 },
      { playerId: 22, categoryId: 10, value: 2 },
      { playerId: 22, categoryId: 11, value: 11 },
      { playerId: 22, categoryId: 12, value: 0 },
      { playerId: 22, categoryId: 17, value: 0 },
      { playerId: 22, categoryId: 18, value: 0 },
      { playerId: 22, categoryId: 19, value: 0 },
      { playerId: 22, categoryId: 20, value: 2 },
      { playerId: 22, categoryId: 23, value: 0 },
      { playerId: 22, categoryId: 24, value: 6 },
      { playerId: 22, categoryId: 25, value: 10 },
      { playerId: 22, categoryId: 27, value: 31 },
      { playerId: 23, categoryId: 1, value: 4 },
      { playerId: 23, categoryId: 3, value: 0 },
      { playerId: 23, categoryId: 4, value: 1 },
      { playerId: 23, categoryId: 5, value: 0 },
      { playerId: 23, categoryId: 6, value: 0 },
      { playerId: 23, categoryId: 7, value: 0 },
      { playerId: 23, categoryId: 8, value: 1 },
      { playerId: 23, categoryId: 9, value: 0 },
      { playerId: 23, categoryId: 10, value: 2 },
      { playerId: 23, categoryId: 11, value: 0 },
      { playerId: 23, categoryId: 12, value: 0 },
      { playerId: 23, categoryId: 17, value: 0 },
      { playerId: 23, categoryId: 18, value: 0 },
      { playerId: 23, categoryId: 19, value: 0 },
      { playerId: 23, categoryId: 20, value: 0 },
      { playerId: 23, categoryId: 23, value: 0 },
      { playerId: 23, categoryId: 24, value: 3 },
      { playerId: 23, categoryId: 25, value: 3 },
      { playerId: 23, categoryId: 27, value: 9 },
      { playerId: 48, categoryId: 1, value: 8 },
      { playerId: 48, categoryId: 3, value: 0 },
      { playerId: 48, categoryId: 4, value: 2 },
      { playerId: 48, categoryId: 5, value: 0 },
      { playerId: 48, categoryId: 6, value: 0 },
      { playerId: 48, categoryId: 7, value: 0 },
      { playerId: 48, categoryId: 8, value: 4 },
      { playerId: 48, categoryId: 9, value: 3 },
      { playerId: 48, categoryId: 10, value: 9 },
      { playerId: 48, categoryId: 11, value: 0 },
      { playerId: 48, categoryId: 12, value: 1 },
      { playerId: 48, categoryId: 17, value: 0 },
      { playerId: 48, categoryId: 18, value: 0 },
      { playerId: 48, categoryId: 19, value: 0 },
      { playerId: 48, categoryId: 20, value: 0 },
      { playerId: 48, categoryId: 23, value: 0 },
      { playerId: 48, categoryId: 24, value: 6 },
      { playerId: 48, categoryId: 25, value: 2 },
      { playerId: 48, categoryId: 27, value: 23 }
    ];

    return {
      statsCategories,
      players,
      statistics
    };
  }
}
