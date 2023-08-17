       
const randomNumber = [1,2,3,4,5]

function multiplyNum(randomNumber){
  let result = 1;
  for(i = 0; i < randomNumber.length; i++){
    result = result * randomNumber[i];
  }
  return result;
}
const productOfValues = multiplyNum(randomNumber);
console.log(productOfValues);
