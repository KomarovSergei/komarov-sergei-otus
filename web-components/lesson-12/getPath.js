/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
function runPath(elem) {
  const elemIn = elem || window.document.getElementById('bad_p1')
  let arrPath = []
  let root = elemIn

  const getPath = (elemIn2, arrPathIn) => {
    if(elemIn2.nodeName !== 'HTML') {
      const childs = elemIn2.children

      for(let i = 0; i < childs.length; i++) {
        if(childs[i] === root) {
          const n = i + 1
          arrPathIn[arrPathIn.length - 1] = arrPathIn[arrPathIn.length - 1] + `:nth-child(${n})`
          root = elemIn2
          break
        }
      }
    }

    if(elemIn2.parentElement) {
      arrPath.push(elemIn2.localName)
      getPath(elemIn2.parentElement, arrPath)
    }
  }

  getPath(elemIn, arrPath)
  arrPath = arrPath.reverse()

  return arrPath.join(' ')
}
