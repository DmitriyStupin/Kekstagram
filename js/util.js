function getRandomPositiveInteger (a, b) {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

function checkStringLength(string, length){
  if (string.length <= length){
    return true;
  }
  return false;
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength};
