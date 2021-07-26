const readLineSync = require('readLine-sync');

const name = readLineSync.question('please type charater name and press enter ');

readLineSync.question ('Hello ' + name + ' welcome to slayer ! press enter to begin ');

const Enemies = ['Gnome Rogue', 'Goblin Warlock', 'Worgen Warrior', 'Undead Death Knight'];
const treasure = ['Health Potion', 'armor', 'weapon', 'gold'];
var prize = [];
let userHealth = 50;
const options = ['Continue', 'Leave', 'Print'];
let dropRate = treasure [Math.floor(Math.random() * treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 -2 + 3 ) + 9);
    const enemy = Enemies[Math.floor(Math.random() * Enemies.length)];
    let EnemiesHealth = 50;
    const EnemiesPower = Math.floor(Math.random() *(5 - 3 + 3) + 4);
    
    const index = readLineSync.keyInSelect (options, 'What would you like to do next ?');

    if (options[index] == 'Leave'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log (name + ': \n' + userHealth + '\nTreasure: ' + dropRate);
    } else if (options[index]=== 'Continue'){
        let key = Math.random();
        if (key <= .3){
            console.log ('continuing......');
        } else if (key >= .3){
            console.log (enemy + ' appeared');
           
            while (EnemiesHealth > 0 && userHealth > 0){
               
                const user = readLineSync.question('What do you want to do? enter "r" to run away or "a" to attack: ');
                
                switch (user){
                  case 'r':
                    const run = Math.random();
                    if (run < .5){
                        console.log ('Unable to run away ' + enemy + ' Attacks you with: ' + EnemiesPower);
                    } else {
                        console.log ('You ran away in fear!!!');
                        break;
                    }
                case 'a':
                    EnemiesHealth -= attackPower;
                    console.log ('You attacked ' + enemy + 'with ' + attackPower + ' attack power');
                    userHealth -= EnemiesPower;
                    console.log ('Enemy just attacked you with ' + EnemiesPower + ' attack power');
                    if (EnemiesHealth <= 0){
                        console.log ('You killed '+ enemy + '.\n ' + enemy + 'dropped '+ dropRate );
                        let loot = Math.random();
                        if (loot <- .3){
                            prize.push(dropRate);
                        } else if (userHealth <- 0){
                            console.log (enemy + ' has defeated you. You are dead.');
                        }
                    }    

                }
            }
        }
    }
}

while (userHealth > 0){
    game();
}