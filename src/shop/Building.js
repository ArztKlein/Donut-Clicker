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
		return p;
	}

	get dps() {
		return this.perSecondIncrease * this.purchacedCount;
	}

	priceOf(count) {
		var p = this.currentPrice();
		var c = (this.increasePercentage + 100) / 100; //percentage
		for (var i = 0; i < count; i++) {
			p *= c;
		}
		return p;
	}

	buy(number) {
		this.purchaced += number;
	}

	sell(number) {
		this.purchaced -= number;
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

	get html() {
		var b = this;

		var nl = [
			'icon: ' + b.assetIndex,
			'intn: ' + b.internalName,
			'name: ' + b.name,
			'desc: ' + b.description,
			'bprc: ' + b.basePrice,
			'cprc: ' + b.currentPrice,
			'unl@: ' + b.unlockAtDonuts,
			'unlk: ' + b.unlocked,
			'prsi: ' + b.perSecondIncrease,
			'edit this in Building.js'
		];
		var n = '';
		nl.forEach((l) => {
			n += l + '\n';
		});

		return '<pre>' + n + '</pre>';
	}
}
