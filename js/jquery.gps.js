/*
 * GPS - v1.0 - 6/4/2013
 * http://vinagency.com/labs/code/gps/
 * 
 * Copyright (c) 2013 Vin, LLC
 * Licensed under the GPL licenses.
 */

;(function($) {	

	$.fn.gps = function(options) {	
	

		var breakpoints = {
				'mobile': 			0,
				'tablet': 			640,
				'small-desktop': 	960,
				'full-desktop': 	1140
			},
			defaults = {
				'breakpoints': 		breakpoints
			},
			_settings = $.extend(defaults, options),
			_here = '';


		init = function(){

log('gps ');

			_orient();

			setTimeout(function(){ _broadcast(); }, 2000);//wait to make sure everything's loaded

			$(window).smartresize( function(){ _orient(); });
		};
		
		_orient = function(){		

			var here,// = _here,
				w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
				h = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;

			$.each( _settings.breakpoints, function(i, n){
			    if ( w >= n ){ here = i; }
			});

//log('orient '+here+' '+_here);

			//hasn't changed changed?
			if (here == _here){ return false; }

			window.gps = _here = here;

						
			_broadcast();
		};

		_broadcast = function(){

			$.event.trigger("gps", _here);
		};

		
		log = function(s) {
			if (typeof console != "undefined" && typeof console.debug != "undefined") {
				console.log(s);
			} else {
				//alert(s);
			}
		};
		
		init();
	};
})(jQuery);



;(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
