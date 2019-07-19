import { Building } from './Building.js';
export class Baker extends Building {
	get name() {
		return 'Baker';
	}

	get internalName() {
		return 'baker-buyable';
	}

	get description() {
		return 'A simple baker. He looked shady tho. Back ally guy.';
	}

	get assetIndex() {
		return 'shop-baker';
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
}
