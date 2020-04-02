var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element) {
	console.log(element);
});

villes.every(function(element) {
	if (element.includes("a")) {
		console.log("lettreADansToutesLesVilles = true");
	}
	else {
		console.log("lettreADansToutesLesVilles = false");
	}
});

villes.some(function(element) {
	if (element.includes("-")) {
		console.log("auMoinsUneVilleAvecUnTiret = true");
	}
});

var villesSansTiretSansEspace = villes.filter(function(element) {
	if (!element.includes("-") && !element.includes(" ")) {
		return element;
	}
});

console.log(villesSansTiretSansEspace);

var resultat = villes.filter(function(element) {
	return element.endsWith('s');
}).map(function(element) {
	return element.toUpperCase();
});

console.log(resultat);