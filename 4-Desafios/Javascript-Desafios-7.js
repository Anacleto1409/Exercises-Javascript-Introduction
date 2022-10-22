function calculaMedianaArray(array) {
    array.sort ( function(a,b){return a - b;} );
    var half = Math.floor(array.length/2);
    if(array.length % 2)
    return array[half];
    
    else
    return (array[half-1] + array[half]) / 2.0;
}