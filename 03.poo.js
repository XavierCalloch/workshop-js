function Personne(nom, prenom, pseudo) {
	this.nom = nom;
	this.prenom = prenom;
	this.pseudo = pseudo;
	this.getNomComplet = function() {
		return 'Nom: ' + this.nom + ' - Prénom: ' + this.prenom + ' - Pseudo: ' + this.pseudo;
	}
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77');

var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

console.log(jules.nom);

console.log(jules.prenom);

console.log(jules.pseudo);

console.log(jules.getNomComplet());

afficherPersonne = function(personne) {
	console.log(personne.nom);
	console.log(personne.prenom);
	console.log(personne.pseudo);
	console.log(personne.getNomComplet());
}

afficherPersonne(paul);

jules.pseudo = 'jules44';

console.log(jules.getNomComplet());

console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';

console.log(jules.age);

jules.age = 30;

console.log(jules.age);

function getInitiales(personne) {
	return personne.prenom.charAt(0) + personne.nom.charAt(0);
}

Personne.prototype.getInitiales = getInitiales;

console.log(getInitiales(jules));

var robert = {
		prenom: 'Robert',
		nom: 'LEPREFET',
		pseudo: 'robert77',
		getNomComplet: function() {
			return 'Nom: ' + this.nom + ' - Prénom: ' + this.prenom + ' - Pseudo: ' + this.pseudo;
		}
};

afficherPersonne(robert);

function Client(nom, prenom, pseudo, numeroClient) {
	Personne.call(this, nom, prenom, pseudo);
	this.numeroClient = numeroClient;
	this.getInfos = function() {
		return 'Numéro: ' + this.numeroClient + ' - Nom: ' + this.nom + ' - Prénom: ' + this.prenom;
	}
}

steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');

afficherPersonne(steve);

console.log(steve.numeroClient);

console.log(steve.getInfos());