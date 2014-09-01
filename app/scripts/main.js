'use strict';

/* HERO IMAGE
-------------------------------------------------- */

var HeroImage = function() {
	this.imageSelector = '.hero-image';
	this.textSelector = '.hero-text';
};

HeroImage.prototype.init = function() {
	// imagesLoaded( $(this.imageSelector), $.proxy(this.show, this));
	$(this.imageSelector).waitForImages($.proxy(this.show, this));
};

HeroImage.prototype.show = function() {
	// Fade in image
	$(this.imageSelector).transition({opacity: 1}, 400);

	// Fade and slide in text
	$(this.textSelector).css('opacity', 0);
	$(this.textSelector).delay(200).transition({
		opacity: 1
	}, 400);
};

/* INITIALIZE
-------------------------------------------------- */

$(document).ready(function() {
	var heroImage = new HeroImage();
	heroImage.init();
});