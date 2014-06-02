GPS
======

This project contains a set of JavaScript plugins that allow you to integrate <a href="http://vinespring.com">VineSpring eCommerce</a> features into your website.

### Breakpoint situational awareness

Have you ever needed to know within JavaScript what CSS breakpoint we're in?  I know I have.  GPS tells you where you're at wherever you are.


<a href="http://vinagency.com/downloads/gps/demo.html" class="button">Demo</a>



## What it does

GPS sets a global variable, so you can tell what the breakpoint state is.  It updates after page load and browser resize.



## Use

### 1. Include the script

```javascript
<script src="jquery.js"></script>
<script src="jquery.gps.js"></script>
```

### 2. Instantiate

```javascript
$.gps();
```


### 3. Check GPS

```javascript
	// log state to console
	console.log( window.gps );
```

```javascript
	switch (window.gps){
	case 'mobile':
		// mobile
	case 'tablet':
		// tablet
		break;
	case 'desktop':
		// desktop
	}
```


### 4. Subscribe to GPS change event

```javascript
	$(document).bind("gps", function(e) {
		console.log( 'GPS changed to: '+window.gps );
	}
```


## Options

GPS takes one paramater, breakpoint, datatype object containing key/value pairs for breakpoint state and minimum width.  The value is the equivalent of the media query min-width, and comes from the browser visible screen width.

The default settings:

```javascript
	var defaults = {
	 'mobile': 0,
	 'tablet': 640,
	 'small-desktop': 960,
	 'full-desktop': 1140
	}
	$.gps({ 'breakpoints': defaults });
```



You can specify your own custom breakpoint parameters.

```javascript
	var custom_breakpoints = {
	 'tamagotchi': 0,
	 'mobile': 100,
	 'tablet': 480,
	 'desktop': 960
	}
	$.gps({ 'breakpoints': custom_breakpoints });
```


In this example  0-639 registers as 'mobile', 640-959 as 'tablet', etc.

```
	javascript{ 'mobile': 0,  'tablet': 640, 'desktop': 960 }
```


### Event

```javascript
	//bind to event
	$(document).bind("gps", function(e) {
	//check state
	   if (window.gps == 'mobile'){
	     //state is mobile
	   }
	});
```



<hr />

## Notes

### Viewport

You'll need to add the meta viewport tag for mobile devices to respond correctly without resizing the page.

```javascript
<meta name="viewport" content="width=device-width, initial-scale=1" >
```

### Dependencies

<a href="http://jquery.com/" target="_blank">jQuery</a><br />
<a href="http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/" target="_blank">SmartResize</a> (included)<br />


### License

<a href="https://www.gnu.org/copyleft/gpl.html" target="_blank">GPL</a>

