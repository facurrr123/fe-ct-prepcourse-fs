/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = Object.entries(objeto);
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result = {}; 

    for(let i=0; i<string.length; i++){
        if (result[string[i]]){ 
            result[string[i]]++; 
        }
        else{ 
            result[string[i]]=1; 
        }
    }
    return result;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:let arreglo = [];
   let arreglo = [];
   let arreglo2 = [];
   for(let i = 0; i < string.length ; i++){
     if(string[i].toUpperCase() === string[i]){
       arreglo.push(string[i])
     }else{
       arreglo2.push(string[i])
     }
   }
    return `${arreglo.join('')}${arreglo2.join('')}`;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  let cadena = [];
  let arreglo = frase.split(' ');
  let cadena2 = [];
  for (let i = 0; i < arreglo.length; i++) {
    cadena.push(arreglo[i].split(''));
    cadena[i].reverse();
    }
  for (let n = 0; n < cadena.length; n++){
    cadena2.push(cadena[n].join(''));
  }
   return cadena2.join(' ');
  
}


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let arreglo = numero.toString()
   let capicua = false;
   let n = 1;
   for (let i = 0; i < arreglo.length; i++){
     if ( arreglo[i] === arreglo[arreglo.length - n]){
       capicua = true;
       n++;
     }else{
       return "No es capicua";
     }
   }
   if (capicua === true){
     return "Es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arreglo = [];
   for(let i = 0; i < string.length; i++){
     if(string[i] === 'a' || string[i] === 'b'|| string[i] === 'c'){
       continue;
     }else{
       arreglo.push(string[i]);
     }
   }
   return arreglo.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function (a, b) {
      return (a.length - b.length);
    });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo = [];
   for(let i = 0; i < array1.length; i++){
       for(let n = 0; n < array2.length; n++){
           if(array1[i] === array2[n]){
               arreglo.push(array2[n]);
           }
       }
   }
   return arreglo;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
