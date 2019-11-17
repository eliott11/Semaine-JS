/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */

function function1(arg1) {
    console.log(arg1);
}

function1("Argument Exo 1");

/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */

function function2(num) {
    return num * 2;
}

console.log(function2(5));

/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */

function modulo(nb) {
    return nb % 2 ? "Impair" : "Pair";
}

console.log(modulo(3));

// function modulo(nb) {
//     if (nb % 2) {
//         return "Impaire";
//     } else {
//         return "Pair";
//     }
// }

// console.log(modulo(3));

/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */

(function Bonjour(a) {
    console.log('Bonjour :', a);
})(1);

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */

function displayArgs(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

displayArgs(1, 2, 3);


/**
 * Exercice 6 :
 * Reproduire la suite de fibonachi : 1-1-2-3-5-8-9-17
 */

function fibonacci(nb) {
    if (nb < 2) {
        return nb;
    }
    return (nb + nb - 1) + fibonacci(nb - 2);
}

console.log(fibonacci(12));