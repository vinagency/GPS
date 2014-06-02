<h1>GPS</h1>

<h2>Breakpoint situational awareness</h2>

Have you ever needed to know within JavaScript what CSS breakpoint we're in?  I know I have.  GPS tells you where you're at wherever you are.

<p class="centered">
<a href="http://vinagency.com/downloads/gps/demo.html" class="button">Demo</a> <a href="http://vinagency.com/downloads/gps/jquery.gps.js" class="button">Download</a>
</p>

<hr />


<h2 id="what-it-does" class="milestone">What it does</h2>

GPS sets a global variable, so you can tell what the breakpoint state is.  It updates after page load and browser resize.

<hr />

<h2 id="use" class="milestone">Use</h2>

<h3>1. Include the Script</h3>

<code>
&laquo;script src="jquery.js"&raquo;&laquo;/script&raquo;
&laquo;script src="jquery.gps.js"&raquo;&laquo;/script&raquo;
</code>

<h3>2. Instantiate the Script</h3>

<code>
$.gps();
</code>


<h3>3. Check GPS</h3>

<code>console.log( window.gps );</code>

<code>if ( window.gps == "mobile" ){
//mobile
} else if ( window.gps == "tablet" ){
//tablet
} else {
//desktop
}</code>


<h3>4. Subscribe to GPS change event</h3>

<code>
$(document).bind("gps", function(e) {
console.log( 'GPS changed to: '+window.gps );
}
</code>

<hr />


<h2 id="options" class="milestone">Options</h2>

GPS takes one paramater, breakpoint, datatype object containing key/value pairs for breakpoint state and minimum width.  The value is the equivalent of the media query min-width, and comes from the browser visible screen width.

The default settings:

<code>
var defaults = {
 'mobile': 0,
 'tablet': 640,
 'small-desktop': 960,
 'full-desktop': 1140
}
$.gps({ 'breakpoints': defaults });
</code>



You can specify your own custom breakpoint parameters.

<code>
var custom_breakpoints = {
 'tamagotchi': 0,
 'mobile': 100,
 'tablet': 480,
 'desktop': 960
}
$.gps({ 'breakpoints': custom_breakpoints });
</code>


In this example  0-639 registers as 'mobile', 640-959 as 'tablet', etc.

<code>{ 'mobile': 0,  'tablet': 640, 'desktop': 960 }</code>


<h3>Event</h3>

<code>
//bind to event
$(document).bind("gps", function(e) {
//check state
   if (window.gps == 'mobile'){
     //state is mobile
   }
});
</code>



<hr />

<h2 id="notes" class="milestone">Notes</h2>

<h3>Viewport</h3>

You'll need to add the meta viewport tag for mobile devices to respond correctly without resizing the page.

<code>
&laquo;meta name="viewport" content="width=device-width, initial-scale=1" /&raquo;
</code>

<h3>Dependencies</h3>

<p class="centered">
<a href="http://jquery.com/" target="_blank">jQuery</a><br />
<a href="http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/" target="_blank">SmartResize</a> (included)<br />
</p>

<h3>License</h3>

<p class="centered"><a href="https://www.gnu.org/copyleft/gpl.html" target="_blank">GPL</a></p>

<hr />


<p class="centered">
<a href="http://vinagency.com/downloads/gps/demo.html" class="button">Demo</a> <a href="http://vinagency.com/downloads/gps/jquery.gps.js" class="button">Download</a>
</p>

