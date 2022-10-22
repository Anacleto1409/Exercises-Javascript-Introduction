function retornaParesArray(array) {
    let par = array.filter(verPar)
    return par 
}
function verPar(i) {
    return i % 2 == 0
}