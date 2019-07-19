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

	displayStore() {
		this.game.shopDPS = this.dps;
		this.Buyable.forEach((b) => {
			var e = $('.' + b.internalName, this.pane);

			if (e.length == 0) {
				e = $('<div></div>'); //Create a jQuery selector of the source so we can add event handlers on to it.
				e.addClass(b.internalName);
				this.pane.append(e); //Add it to the DOM
			}
			e = b.html(e);

			if (this.game.donuts >= b.currentPrice) {
				//We can buy it, lets style it like we can
				e.addClass('affordable');
			}
			else {
				e.removeClass('affordable');
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
		if (price <= this.game.donuts) {
			buyable.buy(number);
			this.game.donuts -= price;
		}
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
