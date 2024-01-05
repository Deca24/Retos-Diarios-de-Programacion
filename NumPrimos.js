/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(n) {
    if ( n <= 1) {
        return false;
    }
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i <= 100; i++) {
    if(isPrime(i)){
        console.log(i);
    }
}
isPrime(11);
isPrime(5);
isPrime(2);