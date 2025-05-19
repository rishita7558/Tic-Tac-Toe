let turn = 'X';
let gameOver = false;
const changeTurn = ()=>{
    return turn=='X'?'O':'X';
}
const checkWin = ()=>{
    let boxTexts = document.querySelectorAll(".box-text");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(subArr=>{
        if(boxTexts[subArr[0]].innerText===boxTexts[subArr[1]].innerText&&boxTexts[subArr[1]].innerText===boxTexts[subArr[2]].innerText&&boxTexts[subArr[0]].innerText!==""){
            document.querySelector(".info").innerText = `'${boxTexts[subArr[0]].innerText}' Won!!`;
            gameOver=true;
        }
    });
}

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element)=>{
    let boxText = element.querySelector(".box-text");
    element.addEventListener("click",()=>{
        if(boxText.innerText ===''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.querySelector(".info").innerText = `Turn for '${turn}'`;
            }
        }
    });
});

reset.addEventListener("click",()=>{
    let boxTexts = document.querySelectorAll(".box-text");
    Array.from(boxTexts).forEach((element)=>{
        element.innerText=""
    });
    turn = 'X';
    document.querySelector(".info").innerText = `Turn for '${turn}'`;
    gameOver=false;
});