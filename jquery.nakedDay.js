/*
 * jQuery.nakedDay - for the CSS Naked Day
 *
 * Licensed under the MIT license.
 */
 
(function(){
	var now = new Date();
	var time = now.getTime();
	var start = new Date(now.getFullYear(), 3, 9, 0, 0, 0).getTime();
	var end = new Date(now.getFullYear(), 3, 10, 0, 0, 0).getTime();

	if (time >= start && time <= end){
		$('link[rel=stylesheet], link[href*=.css], style').remove();
	}
})();
