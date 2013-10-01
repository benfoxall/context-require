;(function(global){

	var supports_defer = !!(window.innerHeight && document.addEventListener);

	// helper methods 

	function wrap(elem){
		return function(fn){
			fn(elem);
		};
	}

	function any(elems){
		return elems.length;
	}
	
	function each(elems, fn){
		for (var i = elems.length - 1; i >= 0; i--) {
			fn.call(elems[i])
		}
	}

	function byClassName(className){
		return document.getElementsByClassName(className)
	}

	function replaceClassName(nameRE, replacement){
		this.className = this.className.replace(nameRE,replacement);
	}

	function loadElement(){
		var rq = this.getAttribute('data-cr');
		global.require([rq], wrap(this));
	}

	function loadVisible(){
		each(byClassName('cr-defer'), function(){
			if(window.innerHeight > this.getBoundingClientRect().top){
				replaceClassName.call(this, /\bcr-defer\b/, 'cr-load');
				loadElement.call(this);
			}
		});
	}

	function debounce(fn, timeout){
		var _timer;
		return function(){
			if(_timer){clearTimeout(_timer)}
			_timer = setTimeout(fn, timeout);
		}
	}

	function cr(){

		// update elements to either be 'cr-load' or 'cr-defer'
		// depending on if they should be loaded now, or when
		// scrolled into view

		each(byClassName('cr'), function(){
			var crClass = supports_defer && this.getAttribute('data-cr-defer') !== null ?
										'cr-defer':
										'cr-load';
			replaceClassName.call(this, /\bcr\b/, crClass);
		})

		// load the target elements
		each(byClassName('cr-load'), loadElement);

		if(supports_defer && any(byClassName('cr-defer'))){
			loadVisible();
			document.addEventListener('scroll', debounce(loadVisible, 10), false);
		}

	}


	// todo - update on new content or dom ready maybe
	cr();

	// for now, expose cr so it can be called
	// when the page is loaded
	global.cr = cr;



})(this);
