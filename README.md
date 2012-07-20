cr.js
=====

This is a tiny script that allows you to load (require) js files based on the content of a page.  It is **not** a script loader.

Usage
-----

```html
<div class="cr" data-cr="fancy">
	<p>This part is made all fancy</p>
</div>
…
…
<script data-main="js/main" src="/js/require.js"></script>
```

```js
//--fancyscript.js

define(['jquery'], function($){

	$.fn.make_fancy = function(){
		this.animate({fontSize:'+=50'})
	};

	return function(content){
		$(content).find('p').make_fancy();
	}

});

//--main.js

// your require.js config

require(['cr']);

```