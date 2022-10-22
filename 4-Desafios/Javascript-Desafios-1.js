function calculaSomatorioComprimentoStringsArray(array) { let val = 0
    let res = 0
    
    for (let i = 0; i< array.length;i++){
        val = array[i].length
        res += val
    }
    return res
    }