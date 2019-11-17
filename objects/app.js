// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object

/**
 * Exercice 1 :
 * Créer un objet avec comme propriété âge, name et notes (un tableau de note)
 */
const obj = {
    name:'Eliott',
    age:'19',
    notes:[15,16,'19,5'],
};
obj.name = "Yo";
console.log(obj.name);

const arr = [obj, obj, obj];

arr.map( o => console.log( o.name));
/**
 * Exercice 2 :
 * Affichez la meilleure note
 */
const notesSorted = obj.notes.sort(Function (a, b) {
    return a - b;
});
console.log('best note :', notesSorted[notesSorted.length -1])
/**
 * Exercice 3 :
 * Affichez toutes les propriétés dans un tableau
 */

console.log(Object.keys(obj));