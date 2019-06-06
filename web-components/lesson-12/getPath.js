function runPath(elem) {
    const elemIn = elem || window.document.getElementById('find_me')
    let arrPath = []

    function getPath(elemIn, arrPath) {
    if (elemIn.parentElement) {
        arrPath.push(elemIn.localName)
        getPath(elemIn.parentElement, arrPath)
    }
    }
    getPath(elemIn, arrPath)
    arrPath = arrPath.reverse()

    return arrPath.join(' ')
}
