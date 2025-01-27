function isEvenlyDivisible(num1, num2) {
  return (num1 % num2 === 0);
}

function halfSquare(num1) {
  return ((num1 * num1)/2);
}

function isLong(str) {
  return (str.length >= 15);
}

function exclaim(str) {
  let newStr = '';
  for (i=0; i<str.length; i++){
    if(str[i]!=='!'){
      newStr += str[i];
    }
  }
  return newStr + '!'
}

function countWords(str) {
  let count = 1
  for(i=0; i < str.length; i++){
    if (str[i] === ' '){
      count ++
    }
  }
  return count;
}

function containsDigit(str) {
  const numbers = '1234567890'
  let test = false
  for (i=0; i<str.length; i++){
  if (numbers.includes(str[i]))
  {test = true}
  }
  return test
}

function containsLowerCase(str) {
  const lowerCase = 'qazwsxedcrfvtgbyhnujmikolp'
  let test = false
  for (i=0; i<str.length; i++){
  if (lowerCase.includes(str[i]))
  {test = true}
  }
  return test
}

function containsUpperCase(str) {
  const upperCase = 'QAZWSXEDCRFVTGBYHNUJMIKOLP'
  let test = false
  for (i=0; i<str.length; i++){
  if (upperCase.includes(str[i]))
  {test = true}
  }
  return test
}

function containsNonAlphanumeric(str) {
  const nonAlph = ' !@#$%^&*()_+=><?"'
  let test = false
  for (i=0; i<str.length; i++){
  if (nonAlph.includes(str[i]))
  {test = true}
  }
  return test
}

function containsSpace(str) {
  const lowerCase = ' '
  let test = false
  for (i=0; i<str.length; i++){
  if (lowerCase.includes(str[i]))
  {test = true}
  }
  return test
}

function digits(num) {
  const numArr = [];
  let numStr = num.toString()
for (i=0; i<numStr.length; i++){
  if(numStr[i]==='.'|| numStr[i] ==='-')
  {}
  else {
numArr.push(parseInt(numStr[i]))
  }
}
return numArr;
}


function truncate(str) {
  if (str.length>= 15){
  return  str.slice(0,8)+'...'
  }
  else {
    return str;
  }
}

function isValidPassword(str) {
  return (containsDigit(str) && containsLowerCase(str) && containsNonAlphanumeric(str)
  && !containsSpace(str) && containsUpperCase(str));
}

function onlyPunchy(arr) {
  
  const newArr = [];
  
  for (i=0; i<arr.length; i++){
   let movie = arr[i]
    let edit = movie.slice(0,movie.indexOf('!')) 
    if(edit.length< 15){
    
    newArr.push(edit+'!')}
    
    }return newArr
  }




module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}