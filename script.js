let calculation = localStorage.getItem("answer");
if (calculation === null) {
  calculation = "";
}
function calculation1(input1) {
  calculation += input1;
  // console.log(calculation);
  document.querySelector(".js-screen").innerHTML = calculation;
  localStorage.setItem("answer", calculation);
}
function answer() {
  localStorage.setItem("answer", calculation);
}
document.querySelector(".js-calc").addEventListener("click" , ()=>{
  eval(calculation);
      calculation = eval(calculation);
      document.querySelector(".js-screen").innerHTML = calculation;
      localStorage.setItem('answer', calculation);
})
document.querySelector(".js-clear").addEventListener("click" , ()=>{
  calculation = '';
  document.querySelector(".js-screen").innerHTML = 0;
  localStorage.setItem('answer',calculation);
})
document.querySelector(".js-ans").addEventListener("click" , ()=>{
  if(document.querySelector(".js-screen").innerHTML === ''){
    document.querySelector(".js-screen").innerHTML = 0;
  }else{
    document.querySelector(".js-screen").innerHTML = calculation;
  }
})