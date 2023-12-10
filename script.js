// Good Luck 💪🏾
function ZeroAndOne(val){
   
    
   
  for(let i=0;i<val.length;i++){
    let zero="Zero"
    let one="One"
    if(val[i] === one){
        one=1;
        console.log(one)
    }else if(val[i] === zero){
        zero=0
        console.log(zero)
    }
  }
}

ZeroAndOne(["One","zero","Zero","One"])
// ZeroAndOne(["Zero", "ONE", "one", "Zero"])
