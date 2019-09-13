"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./inheritance/MatchReader");
var MatchResults_1 = require("./MatchResults");
var reader = new MatchReader_1.MatchReader('./src/data/football.csv');
reader.read();
var dateOfFirstMatch = reader.data[0][0];
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games.");
