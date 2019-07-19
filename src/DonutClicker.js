import $ from 'jquery';
import { Shop } from './shop/Manager.js';
import { Game } from './game/Manager.js';
import { Assets } from './assets/Manager.js';

$(() => {
	var GameObject = $('#dcg');
	GameObject.attr('id', 'loaded-donut-clicker');

	var AssetManager = new Assets();

	var InfoPane = $('<div class="info"></div>');
	var GamePane = $('<div class="game"></div>');
	var ShopPane = $('<div class="shop"></div>');

	GameObject.append(InfoPane);
	GameObject.append(GamePane);
	GameObject.append(ShopPane);

	console.log(ShopPane);
	var GameManager = new Game(GamePane);
	var ShopManager = new Shop(ShopPane, GameManager);

	setInterval(() => {
		//Call Game manager to add DPS etc.
		GameManager.update();
		GameManager.display();
	}, 1000);

	setInterval(() => {
		ShopManager.displayStore();
		GameManager.display();

		AssetManager.update();
	}, 1000 / 60); //60fps;
});
