# Advanced Elo Calculator 

AEC is a node.js library for dealing with Elo calculation

## Installation

Use the package manager [node.js](https://nodejs.org/en/) to install AEC.

```bash
npm install advanced-elo.calculator
```

## Usage

In node.js, just require the module:
```javascript
const aec = require('advanced-elo.calculator')
```
There are 4 functions in **V 0.1.3**:
```javascript
// Used for 1v1s
aec.c1v1();

// Used for 2v2s
aec.c2v2();

// Used for 3v3s
aec.c3v3();

// User for 4v4s
aec.c4v4();
```
To use a function, do the folowing:
```javascript
aec.c1v1(/* Rating Player 1, Rating Player 2, Max. amount of Elo per game (K), Result (0: Lost, 0.5: Draw, 1: Win') (S)*/);

// The result has to be an integer between 0 and 1. Anything over/under does not work
```
Here are some examples:
```javascript
console.log(aec.c2v2( /* Team 1 */ 1000, 1050, /* Team 2 */ 1020, 1432, /* K */ 16, /* S */ 0.5))

// Expected Result:
[
  1004.17,            // New Rating from Player 1                        [0]
  1054.17,            // New Rating from Player 2                        [1]
  1015.83,            // New Rating from Player 3                        [2]
  1427.83,            // New Rating from Player 4                        [3]
  23.92039090108577,  // Win Chance for Team 1 (Pl. 1 & Pl.2)            [4]
  76.07960909891423   // Win Chance for Team 1 (Pl. 3 & Pl.4)            [5]
]

console.log(aec.c4v4( /* Team 1 */ 1000, 1005, 1010, 1015, /* Team 2 */ 1020, 1025, 1030, 1035, /* K */ 64, /* S */ 1))

// Expected Result:
[
  1033.84,            // New Rating from Player 1                        [0]
  1038.84,            // New Rating from Player 2                        [1]
  1043.84,            // New Rating from Player 3                        [2]
  1048.84,            // New Rating from Player 4                        [3]
  986.16,             // New Rating from Player 5                        [4]
  991.16,             // New Rating from Player 6                        [5]
  996.16,             // New Rating from Player 7                        [6]
  1001.16,            // New Rating from Player 8                        [7]
  47.12494361077314,  // Win Chance for Team 1 (Pl. 1, Pl.2, Pl.3, Pl.4) [8]
  52.87505638922686   // Win Chance for Team 1 (Pl. 5, Pl.6, Pl.7, Pl.8) [9]
]

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Discord: **[PremiumBanana#8636](https://discordapp.com/users/891299124052369518)**


## License
[MIT](https://choosealicense.com/licenses/mit/)

## Change Log
Version **0.1.2**
  - Fixed Bugs

Version **0.1.3**
  - Fixed Bugs

Version **0.1.4**
  - Fixed Bugs