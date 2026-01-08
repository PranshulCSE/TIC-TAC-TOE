let turn = 'O';
let total_turn = 0;
// Winning logical array
let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
// khali Array inner working ke liye
let board_array = new Array(9).fill("E");
//   0.  1.  2.  3.  4.  5.  6.  7.  8
// ["E","E","E","E","E","E","E","E","E"]
 
// Winner Check Krne K Liye Function
function checkWinner(){
   
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }


    return 0;

}



// Print sahi se ho rha hai....

const printer = (event)=>{
   
    const element = event.target;
    // if board is empty
    if(board_array[element.id]==="E") 
   {
    total_turn++;
    if(turn==='O')
    {
        element.innerHTML = "O";
        board_array[element.id] = "O";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            board.removeEventListener('click',printer);
            return;
        }
        turn = "X";
    }
    else{
        element.innerHTML = "X";
        board_array[element.id] = "X";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            board.removeEventListener('click',printer);
            return;
        }
        turn = "O";
    }
 
    // Agar 9 turn ho gaye and koi winner nahi hai to match draw ho gya
    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML = "Match is Draw";
        board.removeEventListener('click',printer);
    }

  }   
}


// Yha Actual match start hota hai

const board = document.querySelector('.board');
board.addEventListener('click',printer);


// Restart Button functionality
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })


   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.addEventListener('click',printer);

})

