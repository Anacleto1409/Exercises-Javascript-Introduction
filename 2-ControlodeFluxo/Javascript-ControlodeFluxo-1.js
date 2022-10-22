let array = [4, 1, 4, 5]
let equacao = ""
let count = 0
for (let i = 0; i <= array.length - 1; i++) {
    count += array[i];
    if (i < array.length - 1) 
    { equacao += array[i] + " + "; }
    else {
        equacao += array[i] + " = ";
        equacao += count
    }
}