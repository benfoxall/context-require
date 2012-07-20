
/* require.js setup */
require.config({
    paths: {
		
		// use cdn jq
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",

        // and the root version of cr
        "cr": "../../cr"

    }
 });

require(['cr']);