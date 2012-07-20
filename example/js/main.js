
/* require.js setup */
require.config({
    paths: {
		
		// use cdn jq
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",

        // and knockout
        "ko": "http://cloud.github.com/downloads/SteveSanderson/knockout/knockout-2.1.0",

        // and the root version of cr
        "cr": "../../cr"

    }
 });

require(['cr']);