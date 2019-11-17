/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */
const age= promp('ton age ?');

if (age>= 18) {
    alert('majeur');
}   else {
    alert('mineur');
}
/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */

const hour = promp ('ton heure');
switch (true) {
    case (hour >= 13):
    case (hour >= 0 && hour <= 8):
        alert('Bon réveil');
        break;
    case (hour >= 8 && hour <= 17):
        alert('Bonjour');
        break;
    case (hour >= 17 && hour <= 22):
        alert('Bonsoir');
        break;
    case (hour >= 22 && hour <= 28):
        alert('Bonne nuit');
        break;
}
/*
if (hour >= 0 && hour <= 8) {
    alert('Bon réveil');
}
if (hour >= 8 && hour <= 17) {
    alert('Bonjour');
}
if (hour >= 17 && hour <= 22) {
    alert('Bonsoir');
}
if (hour >= 0 && hour <= 8) {
    alert('Bonne nuit');
}
*/

 */
/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */

const agee = +promp('ton age') >= 18 ? alert('majeur') : alert('mineur');