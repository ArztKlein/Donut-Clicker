import $ from 'jquery';

export class Game {
	constructor(pane, shopManager) {
		this.pane = pane;
		this.donuts = 0;
		this.perSecond = 0;
		this.$donut = null;
		this.$donutCount = null;
		this.donutsPerClick = 1;
		this.shopDPS = 0;
	}

	get donutDisplayText() {
		return '<b>Donuts: <b> ' + this.donuts;
	}
	update() {
		this.perSecond = this.shopDPS;
		this.donuts += this.perSecond;
	}

	display() {
		if (this.$donut == null) {
			this.$donut = $('<img asset="donut">');
			this.pane.append(this.$donut);
			this.$donut.click(() => {
				this.donuts += this.donutsPerClick;
				this.display();
			});
		}
		if (this.$donutCount == null) {
			this.$donutCount = $("<div class='donut-count'></div>");
			this.pane.append(this.$donutCount);
		}

		this.$donutCount.html(this.donutDisplayText);
	}
}
