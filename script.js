const bday= document.querySelector("#bday-date");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputMsg = document.querySelector("#output-msg");



var bDaySum=0;
// var num = luckyNumber.value;

function sumEvaluation(){
  var b = bday.value;
  b=b.replaceAll("-","");
  // b=parseInt(b);
  // console.log(b);
  for (let i=0;i<b.length;i++){
      bDaySum = bDaySum + parseInt(b[i]);
  }

  validNumber();
  // var num = parseInt(luckyNumber.value);
 
}

function validNumber(){
  console.log(" in valid number");
  if(luckyNumber.value >0)
  {
    luckEvaluation();
  }
  else{
    outputMsg.innerText="enter valid lucky number";
  }

}

function luckEvaluation(){
  console.log(bDaySum);
   if(bDaySum%luckyNumber.value===0){
    console.log(bDaySum,"lucky");
    outputMsg.innerText ="Lucky";
  }
  else{
    console.log("not lucky");
    outputMsg.innerText ="Not Lucky";
  }
}


checkNumber.addEventListener('click', sumEvaluation);
// console.log(bDaySum);
