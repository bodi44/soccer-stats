import { MatchResults } from './MatchResults';
import { dateStringToDate } from './utils';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  data: string[][]

  read(): void;
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {
  }

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6],
        ];
      });
  }
}
