function calculaMelhorColheita(fila1, fila2) {
    let soma1 = 0
    let soma2 = 0

    for (let i = 0; i <= fila1.length -1; i++){
        soma1 += fila1[i]
    }
    for (i = 0; i <= fila2.length -1; i++){ soma2 += fila2[i]
}
if (soma1 > soma2){
    return `A fila ${1} é a que tem mais maçãs a serem colhidas, mais especificamente ${soma1} unidades.`
}else if(soma2 > soma1){
    return `A fila ${2} é a que tem mais maçãs a serem colhidas, mais especificamente ${soma2} unidades.`
}else if (soma1 === soma2){
    return `Ambas as filas têm ${soma1} unidades.`
}
}