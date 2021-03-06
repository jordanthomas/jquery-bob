/*
jQuery Bob
Author: WonderGroup, Jordan Thomas
URL: http://labs.wondergroup.com/demos/mini-ui/index.html
License: MIT (http://en.wikipedia.org/wiki/MIT_License)
*/
jQuery.fn.bob = function(o) {
	var d = { speed: 50, bobs: 3, travel: 5, callback: null };
	var o = jQuery.extend(d, o);
	
	return this.each( function() {
		var cache = this;
		var wrap = jQuery(this).wrap('<div class="bob-wrap"></div>').css("position","relative");
		var calls = 0;
		for (i=1;i<=o.bobs;i++) {
			jQuery(this).animate({
				top: "-=" + o.travel
			}, o.speed).animate({
				top: "+=" + o.travel*2
			}, o.speed*2).animate({
				top: "-=" + o.travel
			}, o.speed, function() {
				calls++;
				if (jQuery(cache).parent().hasClass('bob-wrap')) {
					jQuery(cache).parent().replaceWith(cache);
				}
				if (calls == o.bobs && jQuery.isFunction(o.callback)) { o.callback(); }
			});
		}
	});
};