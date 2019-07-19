export class Building {
	get name() {
		return 'Buyable Object';
	}

	get internalName() {
		return 'generic-buyable';
	}

	get description() {
		return 'A buyable object. Did you forget to override the description?';
	}

	get assetIndex() {
		return 'error';
	}

	get basePrice() {
		return 500.0;
	}

	get unlockAtDonuts() {
		return 499;
	}

	get perSecondIncrease() {
		return 20;
	}

	get increasePercentage() {
		return 20;
	}

	//Dont override these methods unless needed vvv

	constructor() {
		this.purchaced = 0;
		this.unlocked = false;
		this.unlockedHandlers = [];
		this.change = true;
	}

	get purchacedCount() {
		return this.purchaced;
	}

	get currentPrice() {
		var p = this.basePrice; //price
		var c = (this.increasePercentage + 100) / 100; //percentage
		for (var i = 0; i < this.purchacedCount; i++) {
			p *= c;
		}
		return Math.ceil(p);
	}

	get dps() {
		return this.perSecondIncrease * this.purchacedCount;
	}

	priceOf(count) {
		var p = this.currentPrice;
		var c = (this.increasePercentage + 100) / 100; //percentage
		for (var i = 0; i < count - 1; i++) {
			p *= c;
		}
		return Math.ceil(p);
	}

	buy(number) {
		this.purchaced += number;
		this.change = true;
	}

	sell(number) {
		this.purchaced -= number;
		this.change = true;
	}

	addUnlockHandler(handler) {
		this.unlockedHandlers.push(handler);
	}

	update(donutCount) {
		if (donutCount >= this.unlockAtDonuts) {
			this.unlocked = true;
			this.unlockedHandlers.forEach((h) => {
				h();
			});
		}
	}

	html(e) {
		var b = this;

		var nl = [
			'intn: ' + b.internalName,
			'name: ' + b.name,
			'desc: ' + b.description,
			'bprc: ' + b.basePrice,
			'cprc: ' + b.currentPrice,
			'unl@: ' + b.unlockAtDonuts,
			'unlk: ' + b.unlocked,
			'prsi: ' + b.perSecondIncrease,
			'ownd: ' + b.purchacedCount,
			'edit this in Building.js'
		];
		var n = 'icon: <img asset="' + b.assetIndex + '"/> \n<pre>';
		nl.forEach((l) => {
			n += l + '\n';
		});
		n += '</pre>';
		if (this.change) e.html(n);

		this.change = false;
		return e;
	}
}
