let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
] ;

let playerX = true;
const btns = document.querySelectorAll('.box');

// main logic
const currentPlayer = document.getElementById('current');
btns.forEach((eachBox)=>{
    eachBox.addEventListener( 'click' ,()=>{

        if(eachBox.textContent === '') // this checks X / O don't over write each other
        {
            if(playerX){
                eachBox.textContent = 'X'
                playerX = false ;
            }else{
                eachBox.textContent = 'O' ;
                playerX = true;
            }
        }
        currentPlayer.textContent = `Current Player : ${playerX ? 'X' : 'O'}`;

        let winner = winLogic();
        if(winner != null){
            currentPlayer.textContent = ''
            document.querySelector('h3').textContent =  `WINNER : ${winner}`;
            // eachBox.textContent = ''
        }
    })
})


function winLogic(){
for(let i = 0 ; i < 3 ; i++){ 
        // row win
        let result ; 
        if (btns[wins[i][0]].textContent !== '' &&
            btns[wins[i][0]].textContent === btns[wins[i][1]].textContent &&
            btns[wins[i][1]].textContent === btns[wins[i][2]].textContent)         
                return result = btns[wins[i][0]].textContent;
        

        // column win
        if (btns[wins[0][i]].textContent !== '' &&
            btns[wins[0][i]].textContent === btns[wins[1][i]].textContent &&
            btns[wins[1][i]].textContent === btns[wins[2][i]].textContent)
                return result = btns[wins[0][i]].textContent;

        // diagonal win
        if (btns[wins[0][0]].textContent !== '' &&
            btns[wins[0][0]].textContent === btns[wins[1][1]].textContent &&
            btns[wins[1][1]].textContent === btns[wins[2][2]].textContent)
                return  result = btns[wins[0][0]].textContent;

        if (btns[wins[0][2]].textContent !== '' &&
            btns[wins[0][2]].textContent === btns[wins[1][1]].textContent &&
            btns[wins[1][1]].textContent === btns[wins[2][0]].textContent)
            return result =  btns[wins[0][2]].textContent;
    }
    return null;
}

const reset = document.getElementById('reset');
reset.addEventListener('click', restartGame);

function restartGame(){
btns.forEach((each)=>{
    currentPlayer.textContent = `Current Player : ${playerX ? 'X' : 'O'}`;
    document.querySelector('h3').textContent =  ``;
    each.textContent = ''
    playerX = true;
})
}