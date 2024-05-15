function randomInteger(min, max){
  if (min < 0 || max < 0){
    return 'Число не может быть отрицательным!';
  }else{
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

function checkStringLength(string, length){
  if (string.length <= length){
    return true;
  }
  return false;
}
randomInteger();
checkStringLength();
