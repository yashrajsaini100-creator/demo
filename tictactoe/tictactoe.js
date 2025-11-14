let boxes = document.querySelectorAll(".size");
let resetbut = document.querySelector("#rs");
let ngbut = document.querySelector("#newbut");
let winner = document.querySelector("#win");
let TurnX = true;
const resetgame = ()=>{
 TurnX=true;
 enable();
    winner.classList.add("hide");
}
const disable = ()=>{
  for(let but of boxes){
    but.disabled = true;
    but.innerText = "";
  }
}
const enable = ()=>{
  for(let but of boxes){
    but.disabled= false; 
    but.innerText = "";
  }
}
const winpatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,4,6],
   [2,5,8],
   [3,4,5],
   [6,7,8],
   ];
    boxes.forEach( (box) => {
    box.addEventListener("click" ,()=>{
      if(TurnX){
        box.innerText = "X";
         TurnX=false;
         }
      else{
        box.innerText = "O";
        TurnX=true;
    }
    box.disabled = true;
    checkwinner();
    
});
});
const showWinner = (winn)=>{
    winner.innerText = `Congratulations The Winner Is ${winn} `;
    winner.classList.remove("hide");
    disable();

}
const checkwinner=() =>{
    for(pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("WINNER",pos1);
                showWinner(pos1);
                }
        }
    }
}
ngbut.addEventListener("click", resetgame);
resetbut.addEventListener("click",resetgame);