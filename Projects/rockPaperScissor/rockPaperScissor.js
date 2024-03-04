const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

let youScore = {
    youWin : 0 , 
    youLoss : 0 ,
}

let computerScore = {
    computerWin : 0 ,
    computerLoss : 0,
}

let tie = 0;
let computer = '' ;

let clickedRock = ()=>{
    let randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber < 1/3 ){
        computer = 'Rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computer = "Paper";
    }else computer = 'Scissor'

    // tie
    if(computer === 'Rock') {
        tie = tie + 1 ;
    }
    
    // you lose
    if(computer === 'Paper'){
        computerScore.computerWin += 1; 
        youScore.youLoss += 1;
    } 

    // you win
    if(computer === 'Scissor'){
        youScore.youWin += 1;
        computerScore.computerLoss += 1;
    } 

    let move = document.querySelector('.move');
    move.innerHTML = `You : Rock <br> Computer : ${computer}`;

    let pwin = document.getElementById('pwin');
    pwin.innerHTML = `${youScore.youWin}`;
    
    let ploss = document.getElementById('ploss');
    ploss.innerHTML = `${youScore.youLoss}`;

    let cwin = document.getElementById('cwin');
    cwin.innerHTML = `${computerScore.computerWin}`;
    
    let closs = document.getElementById('closs');
    closs.innerHTML = `${computerScore.computerLoss}`;

    let tieMatch = document.querySelector('.tied');
    tieMatch.innerHTML = `${tie}`;
}

let clickedPaper = ()=>{
    let randomNumber = Math.random();
    if(randomNumber < 1/3 ){
        computer = 'Rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computer = "Paper";
    }else computer = 'Scissor'

    if(computer === 'Rock'){
        youScore.youWin += 1;
        computerScore.computerLoss += 1;
    } 

    if(computer === 'Paper'){
        tie = tie + 1 ;
    } 

    if(computer === 'Scissor'){
        computerScore.computerWin += 1; 
        youScore.youLoss += 1;
    }

    let move = document.querySelector('.move');
    move.innerHTML = `You : Paper <br> Computer : ${computer}`;

    let pwin = document.getElementById('pwin');
    pwin.innerHTML = `${youScore.youWin}`;
    
    let ploss = document.getElementById('ploss');
    ploss.innerHTML = `${youScore.youLoss}`;

    let cwin = document.getElementById('cwin');
    cwin.innerHTML = `${computerScore.computerWin}`;
    
    let closs = document.getElementById('closs');
    closs.innerHTML = `${computerScore.computerLoss}`;

    let tieMatch = document.querySelector('.tied');
    tieMatch.innerHTML = `${tie}`;
}

let clickedScissor = ()=>{
    let randomNumber = Math.random();
    if(randomNumber < 1/3 ){
        computer = 'Rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computer = "Paper";
    }else computer = 'Scissor'

    if(computer === 'Rock'){
        computerScore.computerWin += 1; 
        youScore.youLoss += 1;
    }

    if(computer === 'Paper'){
        youScore.youWin += 1;
        computerScore.computerLoss += 1;
    } 

    if(computer === 'Scissor'){
        tie = tie + 1 ;
    } 

    let move = document.querySelector('.move');
    move.innerHTML = `You : Scissor <br> Computer : ${computer}`;


    let pwin = document.getElementById('pwin');
    pwin.innerHTML = `${youScore.youWin}`;
    
    let ploss = document.getElementById('ploss');
    ploss.innerHTML = `${youScore.youLoss}`;

    let cwin = document.getElementById('cwin');
    cwin.innerHTML = `${computerScore.computerWin}`;
    
    let closs = document.getElementById('closs');
    closs.innerHTML = `${computerScore.computerLoss}`;

    let tieMatch = document.querySelector('.tied');
    tieMatch.innerHTML = `${tie}`;
}

rock.addEventListener('click' , clickedRock)
paper.addEventListener('click' , clickedPaper)
scissor.addEventListener('click' , clickedScissor)
