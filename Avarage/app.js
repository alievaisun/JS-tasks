// A: 
let firstMark = +prompt(`write your first mark`)
let secondMark = +prompt(`write your second mark`)
let thirdMark = +prompt(`write your third mark`)
let sum =0
let index= 3
let avarage = 0

while (firstMark>0 && secondMark>0 && thirdMark>0) {
   sum = firstMark + secondMark + thirdMark
   avarage = sum / index
}
console.log(avarage);

//I wanna try this way
/* let m = +prompt(`write your marks`)
 let sum = 0
 let index= 1
 let avarage = 0
  for (let m = 0; m <4; ) {
     sum+=m
    avarage= sum/index 
    index++
  }
  console.log(avarage)
  */
