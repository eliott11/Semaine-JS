/**
 * Exercice 1 :
 * Créez un tableau
 */
let array =[];
/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array1 =new Array( "orange","red", "blue", "black", "pink" );

/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array3 = new Array(10).fill(false);
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */
let array=[];
array.push(1);
/**
 * Exercice 5
 * Créez un tableau et affichez la deuxième valeur
 */
let array=[1, 2];
array2[1];
array2[array2.length];
/**
 * Exercice 6
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la deuxième valeur
 */
let array6= new Array ( 10 ).fill(1) ;
console.log(array6);
array6.splice(1,1);
console.log(array6);

/**
 * Exercice 7 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la première valeur
 */
let array7= new Array ( 10 ).fill(1) ;
console.log(array7);
array7.splice(0,1);
console.log(array7);
/**
 * Exercice 8 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la dernière valeur
 */
let array8= new Array ( 10 ).fill(1) ;
console.log(array8);
array8.pop();
console.log(array8);
/**
 * Exercice 9 :
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs de x et y à 0
 */
let array9= [
    [0, 0],
    [0, 0],
    [0, 0]
];
console.log(array9);
/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et affichez toute les valeurs
 */
for (let i = 0; i <= arr.length -1; i++) { //arr.lenght = longueur du tableau
    console.log('Ma position :', arr[i]); //si i = 0 => arr[0]
}

arr.foreach(function (o) {
    console.log('Ma position 2 :', o);
});

/**
 * Exercice 11 : Bonus
 * immutabilité
 **/


const arr1 = ['Tab 1'];
const arr2 = arr1;
arr1.splice(0, 1);
console.log('arr1 :', arr1);
console.log('arr2 :', arr2);
// const arrr1 = ['Tab 1'];
// const arrr2 = [...arrr1]; // Toujours recréer un tableau