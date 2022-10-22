function retornaParesArray(array) {
    let newArr = [];

    for(let i= 0; i < array.length; i++){
        if (array[i] % 2 == 0) {
         newArr.push(array[i]);
    }
    }
    return newArr
}