let turn = 'X';
let gameOver = false;
const changeTurn = ()=>{
    return turn=='X'?'O':'X';
}
const checkWin = ()=>{
    let boxTexts = document.querySelectorAll(".box-text");
    let wins=[
        [0,1,2,5,5,0,20],
        [3,4,5,5,15,0,20],
        [6,7,8,5,25,0,20],
        [0,3,6,-5,15,90,20],
        [1,4,7,5,15,90,20],
        [2,5,8,15,15,90,20],
        [0,4,8,1,15,45,28],
        [2,4,6,1,15,135,28],
    ]
    wins.forEach(subArr=>{
        if(boxTexts[subArr[0]].innerText===boxTexts[subArr[1]].innerText&&boxTexts[subArr[1]].innerText===boxTexts[subArr[2]].innerText&&boxTexts[subArr[0]].innerText!==""){
            document.querySelector(".info").innerText = `'${boxTexts[subArr[0]].innerText}' Won!!`;
            gameOver=true;
            document.querySelector(".line").style.transform= `translate(${subArr[3]}vw ,${subArr[4]}vw) rotate(${subArr[5]}deg)`
            document.querySelector(".line").style.width = `${subArr[6]}vw`;
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
    document.querySelector(".line").style.width = '0vw';
    document.querySelector(".info").innerText = `Turn for '${turn}'`;
    gameOver=false;
});