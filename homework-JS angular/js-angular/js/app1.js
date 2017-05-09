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
		id:'1',
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
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'},
			{stars: 5, body:'I love this product', author: 'alonso@gmail.com'}
		]
	},
	
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
