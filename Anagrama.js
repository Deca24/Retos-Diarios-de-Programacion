/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagrams(word1, word2) {
    //Comprobamos que las palabras no sean iguales
    if(word1 === word2){
        return false;
    }

    // Comprobamos que las palabras tengan la misma longitud
    if (word1.length !== word2.length) {
      return false;
    }
  
    // Convertimos las palabras a arrays de caracteres
    const chars1 = word1.split("");
    const chars2 = word2.split("");
  
    // Ordenamos los caracteres de cada palabra
    chars1.sort();
    chars2.sort();
  
    // Comparamos los caracteres de cada palabra
    for (let i = 0; i < chars1.length; i++) {
      if (chars1[i] !== chars2[i]) {
        return false;
      }
    }
    // Las palabras son anagramas
    return true;
  }