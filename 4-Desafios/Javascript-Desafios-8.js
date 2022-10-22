function calculaModaArray(array) { 
    const a = {}
    array.forEach(number =>{
        if(!a [number]){
            a [number] = 1
        }else{
            a [number] += 1
            }
})

let valorMaior = 0
let valorMaiorCha= -Infinity

for(let chave in a){
    const valor = a[chave]
    if ( valor > valorMaior) {
        valorMaior = valor
        valorMaiorCha = chave
    }
}
return Number (valorMaiorCha)
}