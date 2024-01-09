const game = {
    team1: 'Bayern Munich',
    team2: 'Dortmund',
    players: [
        [
            'Neuer',
            'Pavad',
            'Kimmic ',
            'Alaba',
            'Matinez',
            'Davies',
            'Goretzk',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Hoàng',
            'Phúc',
            'Quân',
            'Quý',
            'Hoài ',
            'Thương',
            'Phát',
            'Trung',
            'Hệ',
            'Chiến',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Quân', 'Thương', 'Quân'],
    date: 'Nov 9th 2023',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2)
//2 
const [gk, ...others] = players1;
console.log(gk, others);
//3 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4 
const players1Final = [...players1, 'Thiago', 'Cotinnho', 'Periscic'];
//5
const { odds: { team1, x: draw, team2 }, } = game ;
console.log(team1, draw, team2);
//6
const printGoals = function(...players){
    console.log(players);
    console.log(`${players.length} người ghi bàn`)
}
printGoals(...game.scored);
//7 
team1 < team2 && console.log('Team 1  có khả năng chiến thắng hơn');
team1 > team2 && console.log('Team 2 có khả năng chiến thắng hơn');

//===========================LAB2======================
//1
for(const [i, player] of game.scored.entries())
console.log (`Global ${i +1}: ${player} `)
//2 
const odds = Object.values(game.odds);
let avegare = 0;
for(const odd of odds) avegare += odd;
avegare /= odds.length;
console.log (avegare);
//3
for(const [team ,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`)
}



 