'use strict';

/* HERO IMAGE
-------------------------------------------------- */

var HeroImage = function() {
	this.imageSelector = '.hero-image';
	this.textSelector = '.hero-text';
};

HeroImage.prototype.init = function() {
	imagesLoaded( $(this.imageSelector), $.proxy(this.show, this));
};

HeroImage.prototype.show = function() {
	// Fade in image
	$(this.imageSelector).animate({opacity: 1}, 400);

	// Fade and slide in text
	$(this.textSelector).css('opacity', 0);
	$(this.textSelector).css('padding-top', '10px');
	$(this.textSelector).delay(400).animate({
		opacity: 1,
		'padding-top': 0
	}, 400);
};

/* INITIALIZE
-------------------------------------------------- */

$(document).ready(function() {
	var heroImage = new HeroImage();
	heroImage.init();
});