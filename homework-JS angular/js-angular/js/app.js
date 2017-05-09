(function(){

	var app = angular.module('store', []);

	var gem = {
		id:'1',
		titulo: 'Dodecahedron',
		editorial:'Ediciones B/ zeta',
		autor: 'Orson Scott Card',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, numquam ea! Sequi, nemo maiores culpa, inventore temporibus',
		canPurchase: false,
		soldOut: true
	}

	var books = [
	{
		id:'2',
		titulo: 'Juego de Ender',
		autor: 'Orson Scott Card',
		editorial:'Gigamesh',
		description: 'La Tierra esta amenazada por una especie extraterrestre deinsectos que pretende destruir la humanidad. Para vencerlos se precisa la intervención de un genio militar, por lo cual se permite el nacimiento de Ender, tercer hijo de una pareja en un mundo que limita a dos el número de descendientes. Ender se entrenará en una estación espacial, superará a sus rivales y se convertirá en la persona capaz de dirigir las flotas terrestres contra los insectos de otros mundos',
		images:[
			{
				full: 'public/img/img1.jpg',
				thumb: 'public/img/img1.jpg'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'juego de Ender'},
			{stars: 5, body:'I love this product', author: 'juego de Ender'}
		]
	},
	{
		id:'3',
		titulo: 'Juego de tronos',
		autor: 'George R. R. Martin',
		editorial:'edhasa',
		description: 'Tras el largo verano, el invierno se acerca a los Siete Reinos. Lord Eddard Stark, señor de Invernalia, deja sus dominios para unirse a la corte de su amigo el rey Robert Baratheon, llamado el Usurpador, hombre díscolo y otrora guerrero audaz cuyas mayores aficiones son comer, beber y engendrar bastardos. Eddard Stark ocupará el cargo de Mano del Rey e intentará desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. En un mundo cuyas estaciones pueden durar decenios y en el que retazos de una magia inmemorial y olvidada surgen en los rincones más sombríos y maravillosos, la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder hacen del juego de tronos una poderosa trampa que atrapará en sus fauces a los personajes... y al lector.',

		images:[
			{
				full: 'public/img/img2.jpg',
				thumb: 'public/img/img2.jpg'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'juego de tronos'},
			{stars: 5, body:'I love this product', author: 'juego de tronos '}
		]
	},
	{
		titulo: 'I robot',
		autor:'Issac Asimov',
		description: 'Los robots de Isaac Asimov son máquinas capaces de llevar a cabo muy diversas tareas, y que a menudo se plantean a sí mismos problemas de conducta humana. Pero estas cuestiones se resuelven en Yo, robot en el ámbito de las tres leyes fundamentales de la robótica, concebidas por Asimov, y que no dejan de proponer extraordinarias paradojas que a veces se explican por errores de funcionamiento y otras por la creciente complejidad de los programas. Las paradojas que se plantean en estos relatos futuristas no son sólo ingeniosos ejercicios intelectuales sino sobre todo una indagación sobre la situación del hombre actual en relación con los avances tecnológicos y con la experiencia del tiempo.',
		images:[
			{
				full: 'public/img/img3.jpg',
				thumb: 'public/img/img3.jpg'
			}
		],
		reviews: [
			{stars: 5, body:'I love this product', author: 'I robot'},
			{stars: 5, body:'I love this product', author: 'I robot'}
		]
	}
	];

	app.controller('StoreController', function(){
		this.products = books;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	})

})();
