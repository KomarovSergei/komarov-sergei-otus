function runPath(elem) {
  const elemIn = elem || window.document.getElementById('find_me');
  let arrPath = [];
  const outString = "";

  const getPath = (elemIn, arrPath) => {
    if (elemIn.parentElement) {
      arrPath.push(elemIn.localName);
      getPath(elemIn.parentElement, arrPath);
    }
  };
  
  getPath(elemIn, arrPath);
  arrPath = arrPath.reverse();

  if(arrPath.length > 0) {
    if(document.querySelectorAll(arrPath.join(' ')).length > 1) {
      return document.querySelectorAll(arrPath.join(' '))[0];
    }
  }

  return arrPath.join(' ');
}
