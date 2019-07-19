import { Baker } from './Baker.js';
import $ from 'jquery';

export class Shop {
	constructor(pane, game) {
		this.pane = pane;
		this.game = game;
		this.Buyable = [
			new Baker()
		];

		console.log('Shop loaded!');
	}

	updateStore() {
		this.pane.empty();
		this.Buyable.forEach((b) => {
			var e = $(b.html); //Create a jQuery selector of the source so we can add event handlers on to it.
			this.pane.append(e); //Add it to the DOM
			if (this.game.donuts >= b.currentPrice) {
				//We can buy it, lets style it like we can
				e.addClass('affordable');
			}

			e.click(() => {
				if (this.game.donuts >= b.currentPrice) {
					this.purchace(1, b);
				}
			});
		});
	}

	purchace(number, buyable) {
		var price = buyable.priceOf(number);
		buyable.buy(number);
		this.game.donuts -= price;
	}

	//Returns the DPS of what has been brought.
	get dps() {
		var total = 0;
		this.Buyable.forEach((b) => {
			total += b.dps;
		});
		return total;
	}
}
``;
