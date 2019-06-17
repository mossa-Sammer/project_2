const msHund=document.querySelector('#msHundreds');
const msTens=document.querySelector('#msTens');
const secondTens=document.querySelector("#secondTens");
const secondOnes=document.querySelector("#secondOnes");
const digits=document.querySelector('.digits');
const body= document.querySelector('body');
let msTensTimer;//interval

//create The Start Button
  let btnStart =document.createElement('button');
  let btn =document.createElement('button');

//style the statrt button
btn.textContent="click me to start";
btn.classList.add('btn');
btn.style.padding="10px 20px";
body.style.flexDirection ="column";

//append the button to the body
body.appendChild(btn);
btn = document.querySelector('.btn');

//buttonListener
let btnClickedBefor=false;
btn.addEventListener('click',()=>{
  btn.disabled=true;
  if(btnClickedBefor){
    resetFileds();
  }
  btnClickedBefor=true;
  msTensTimer=setInterval(increment,10);
  
});

//counters
let msTensTimerCount=0;
let msHundTimerCount=0;
let secondOnesTimerCount=0;
let secondTensTimerCount=0;

//Interval Function
function increment(){
  
  msTensTimerCount++;

  //if 10seconds..
  if(secondTensTimerCount==1){
    
    clearInterval(msTensTimer);
    
    msHund.textContent=0;
    msTens.textContent=0;

    digits.style.color='red';
    btn.disabled=false;
    return ;
  }

  if(secondOnesTimerCount==10){
    secondOnesTimerCount=0;
    secondTensTimerCount++;
    secondOnes.textContent=secondOnesTimerCount;
    secondTens.textContent=secondTensTimerCount;
  }

  if(msTensTimerCount==10){
    if(msHundTimerCount==9){
      msTensTimerCount=0;
      msHundTimerCount=0;
      msHund.textContent=msHundTimerCount;
      msTens.textContent=msTensTimerCount;
      ++secondOnesTimerCount;
      secondOnes.textContent=secondOnesTimerCount;
    }
    
    msTensTimerCount=0;
    msHundTimerCount++;
    msHund.textContent=msHundTimerCount;
  
}
  msTens.textContent=msTensTimerCount;
  
}


function resetFileds(){
  msTensTimerCount=0;
  msHundTimerCount=0;
  secondOnesTimerCount=0;
  secondTensTimerCount=0;
  msHund.textContent='0';
  msTens.textContent='0';
  secondOnes.textContent='0';
  secondTens.textContent='0';
  digits.style.color='black';
}