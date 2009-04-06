(function(){
	var now = new Date();
	var time = now.getTime();
	var start = new Date(now.getFullYear(), 3, 9, 0, 0, 0).getTime();
	var end = new Date(now.getFullYear(), 3, 10, 0, 0, 0).getTime();

	if (time >= start && time <= end){
		var link = document.getElementsByTagName('link');
		for (var i=0, len=link.length; i<len; i++){
			var l = link[i];
			if (l && ((l.href.indexOf('.css') > -1 || l.rel == 'stylesheet'))){
				l.parentNode.removeChild(l);
			}
		}

		var style = document.getElementsByTagName('style');
		for (var i=0, len=style.length; i<len; i++){
			style[i].parentNode.removeChild(style[i]);
		}
	}
})();