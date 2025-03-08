//user plays a game of randomizing 
    //key values hoping to match three items in the spinwheel

//collection of values to randomize 
let orange = 0
let mandarin = 1 
let apple = 2
let kiwi = 3
let banana = 4

function getFruit(num) {
    switch (num) {
        case 0: return 'Orange';
        case 1: return 'Mandarin';
        case 2: return 'Apple';
        case 3: return 'Kiwi';
        case 4: return 'Banana';
    }
}

//bets and wallet activities 
let min = 5
let max = 50
let wallet = 1000

//event listeners
document.querySelector('#minBet').addEventListener('click', minSpin)
document.querySelector('#maxBet').addEventListener('click', maxSpin)
document.querySelector('#wallet').innerText = wallet

    //code for randomization
function randoNum(){
    return Math.floor(Math.random() * 5) 
}
    console.log(randoNum())

    
    //code to compare win lose conditions 

function minSpin(){

    let slot1 = randoNum();
    let slot2 = randoNum();
    let slot3 = randoNum();

document.getElementById('slot1').innerText = getFruit(slot1);
document.getElementById('slot2').innerText = getFruit(slot2);
document.getElementById('slot3').innerText = getFruit(slot3);

wallet -= min;

if(slot1 === slot2 && slot2 === slot3){
    document.getElementById('msg').innerText = 'You Win!';
        wallet += 50
    } else {
    document.getElementById('msg').innerText = 'Try Again';
    }
    document.getElementById ('wallet').innerText = wallet; 

    return
}   

function maxSpin(){

    let slot1 = randoNum();
    let slot2 = randoNum();
    let slot3 = randoNum();

document.getElementById('slot1').innerText = getFruit(slot1);
document.getElementById('slot2').innerText = getFruit(slot2);
document.getElementById('slot3').innerText = getFruit(slot3);
    
wallet -= max;
    
    if(slot1 === slot2 && slot2 === slot3){
        document.getElementById('msg').innerText = 'You Win!';
            wallet += 500
        } else {
        document.getElementById('msg').innerText = 'Try Again';
        }

        document.getElementById ('wallet').innerText = wallet; 

        return
    } 


//website shows slot machine with two bet options and a wallet
    //min bet=$5
    //max bet=$50
    //wallet=$1,000

//user can play min bet 
    //website slot machine takes in $5 --> wallet - $5 
        //website slot machine shows new amount 
        //website slot machine plays bet
        //if user win wallet goes up but by how much???
            //website slot machine prints message 'You won'
        //if user lose wallet goes down -$5
            //wesbite slot machine prints message 'Try again'

//user can play max bet 
//website slot machine takes in $50 --> wallet - $50 
        //website slot machine shows new amount 
        //website slot machine plays bet
        //if user win wallet goes up but by how much???
            //website slot machine prints message 'You won'
        //if user lose wallet goes down -$50
            //wesbite slot machine prints message 'Try again'

//user play new game 
    //website slot machine shows new game option

