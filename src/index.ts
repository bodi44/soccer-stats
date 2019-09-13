import { MatchReader } from './inheritance/MatchReader';
import { MatchResults } from './MatchResults';

const reader = new MatchReader('./src/data/football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games.`);
