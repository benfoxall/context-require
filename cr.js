(function(global){

	function wrap(elem){
		return function(fn){
			fn(elem);
		};
	}

	function cr(){

		var elements = document.getElementsByClassName('cr');

		for (var i = elements.length - 1; i >= 0; i--) {
			var element = elements[i];

			// remove the .cr, add .cr-active
			var className = element.className.replace(/\bcr\b/,'cr-active');
			element.className = className;

			// don't worry about .dataset for now
			var rq = element.getAttribute('data-cr');

			global.require([rq], wrap(element));


		}
	}

	// todo - update on new content or dom ready maybe
	cr();

	// for now, expose cr so it can be called
	// when the page is loaded
	global.cr = cr;



})(this);