console.log("01 - Fonctions");

nombre1 = 10;
nombre2 = 20;

function additionner(nb1, nb2) {
	return nb1 + nb2;
}

resultat1 = additionner(nombre1, nombre2);

console.log("resultat1 = " + resultat1);

var somme = function(nb1, nb2) {
	return additionner(nb1, nb2);
}

resultat2 = somme(nombre1, nombre2);

console.log("resultat2 = " + resultat2);

var multiplication = function(nb1, nb2) {
	return nb1 * nb2;
}

resultat3 = multiplication(nombre1, nombre2);

console.log("resultat3 = " + resultat3);


var afficherOperation = function(nomOperation, operation, nb1, nb2) {
	if (nomOperation == "Somme" && operation == somme) {
		return nomOperation + "(" + nb1 + ", " + nb2 + ") = " + somme(nb1, nb2);
	}
	else if (nomOperation == "Multiplication" && operation == multiplication) {
		return nomOperation + "(" + nb1 + ", " + nb2 + ") = " + multiplication(nb1, nb2);
	}
}

console.log(afficherOperation("Somme", somme, 20, 40));

console.log(afficherOperation("Multiplication", multiplication, 10, 20));

var afficherOperation = function(nomOperation, operation, nb1, nb2) {
	return nomOperation + "(" + nb1 + ", " + nb2 + ") = " + operation(nb1, nb2);
}

console.log(afficherOperation("Soustraction", function(nb1, nb2){
	return nb1 - nb2;
}, 15, 5));