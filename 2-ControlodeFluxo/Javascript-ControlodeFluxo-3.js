let array = [4, 1, -5, 4, 5]
let min = 0
let menor = []
for (let i = 0; i < array.length; i++) {
     if (array[i] > 0){ 
         menor.push(array[i]) 
     } 
     min=menor[1]
     for (let i in array){
         if (menor[i]< min){
             min = menor[i]
         }
     }  
     }