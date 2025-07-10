const boxes = document.querySelectorAll(".box")
const resetbtn = document.querySelector("#reset-btn")
let turnX = true;
const msgcontainer = document.querySelector(".msg-container")
const newbtn = document.querySelector("#newgame")
let msg = document.querySelector("#msg")
let count = 0
let winningPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerHTML ===""){
             if(turnX){
            box.innerHTML = "X"
            box.style.color = "red"
            turnX = false;
            count++;
        }else{
            box.innerHTML= "O"
            box.style.color = "blue"
            turnX = true;
            count++;
        }
        }
        checkWinner()
       
        
    })
})
const resetGame = ()=>{
    turnX = true;
    count = 0
    enableBoxes()
    for(box of boxes){
        box.innerText = ""
    }
    msgcontainer.classList.add("hide")
}
const enableBoxes = ()=>{
   for(box of boxes){
        box.disabled = false
    }
 
}
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true
    }
}
const printWinner = (value)=>{
    msg.innerText = `Winner : ${value}`
    msgcontainer.classList.remove("hide")
    disableBoxes()

}
const gameDraw = ()=>{
    msg.innerText = `Game Drawn`
    msgcontainer.classList.remove("hide")
    disableBoxes()

}
const checkWinner = ()=>{
    for(let pattern of winningPatterns){
        let value1 = boxes[pattern[0]].innerText
        let value2 = boxes[pattern[1]].innerText
        let value3 = boxes[pattern[2]].innerText
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 === value2 && value2 === value3){
                printWinner(value1)

            }
            else{
                if(count == 9){
                    gameDraw()
                }
            }
        }
    }

}
newbtn.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)