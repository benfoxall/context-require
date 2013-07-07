Context Require
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
//--fancy.js

define(['jquery'], function($){

	$.fn.make_fancy = function(){
		this.animate({fontSize:'+=50'})
	};

	return function(content){
		$(content).find('p').make_fancy();
	}

});

//--main.js

require(['cr']);

```

see [example.html](https://github.com/benfoxall/context-require/blob/master/example/example.html)
