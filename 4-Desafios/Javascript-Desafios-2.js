function retornaStringsOrdenadas(array) {

    let done = false
    while (!done){
        done = true
        for (let i = 1; i < array.length;i += 1){
            if (array[i - 1].length < array [i].length){done = false
            let tmp = array[i - 1]
            array [i - 1] = array[i]
            array[i] = tmp
            }
        }
    }
    return array
    }