// code your solution here
function saturdayFun(fun = 'roller-skate'){
return `This Saturday, I want to ${fun}!`;
}
saturdayFun();
saturdayFun(fun);

function mondayWork(work = "go to the office"){
  return `This Monday, I will ${work}.`
}
console.log(mondayWork());
mondayWork("work from home");

function wrapAdjective(highlight = "*"){
  return function(thus = "special"){
    return  `You are ${highlight}${thus}${highlight}!`
  }
}
wrapAdjective("*")("a hard worker")
wrapAdjective("||")("a dedicated programmer")
