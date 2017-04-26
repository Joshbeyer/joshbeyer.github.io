$(function(){
    // Main
    Typed.new(".quote", {
	strings: ["I didn't invent the internet, I just make it look  "],
	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	stringsElement: null,
	// typing speed
	typeSpeed: 1,
	// time before typing starts
	startDelay: 0,
	// backspacing speed
	backSpeed: 0,
	// shuffle the strings
	shuffle: false,
	// time before backspacing
	backDelay: 500,
	// Fade out instead of backspace (must use CSS class)
	fadeOut: false,
	fadeOutClass: 'typed-fade-out',
	fadeOutSpeed: 500, // milliseconds
	// loop
	loop: false,
	// null = infinite
	loopCount: null,
	// show cursor
	showCursor: false,
	// character for cursor
	cursorChar: "_",
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}
    });
});
$(function(){
    // Secondary
    Typed.new(".highlight", {
	strings: [" Awesome", 
    " Beautiful",
    " Amazing",
    " Spectacular"],
	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	stringsElement: null,
	// typing speed
	typeSpeed: 100,
	// time before typing starts
	startDelay: 2100,
	// backspacing speed
	backSpeed: 0,
	// shuffle the strings
	shuffle: false,
	// time before backspacing
	backDelay: 500,
	// Fade out instead of backspace (must use CSS class)
	fadeOut: false,
	fadeOutClass: 'typed-fade-out',
	fadeOutSpeed: 500, // milliseconds
	// loop
	loop: true,
	// null = infinite
	loopCount: null,
	// show cursor
	showCursor: true,
	// character for cursor
	cursorChar: "__",
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}
    });
});