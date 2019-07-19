import Registry from './AssetRegistry.json';
import $ from 'jquery';
export class Assets {
	constructor() {}

	getImage(index) {
		return require('./' + Registry.images[index]);
	}

	update() {
		$('*').each((i, e) => {
			var el = $(e);
			var asset = el.attr('asset');
			if (asset == undefined) return;
			var image = this.getImage(asset);
			if (el.prop('tagName') == 'IMG') el.attr('src', image);

			el.removeAttr('asset'); //Dont double render.
		});
	}
}
