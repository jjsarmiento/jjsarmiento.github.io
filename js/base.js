var jan = new Jandroid("#codeResults", "#codeInput");

$("#codeInput").focus(function(){
	$(this).attr("placeholder", "");
	$(".links").hide();
}).focusout(function(){
	$(this).attr("placeholder", JANOSPLACEHOLDER);
	$(this).val("");
	$(".links").fadeIn(400);
}).keypress(function(e) {
	e.which == 13 && $(this).val() != "" ? jan.response() : null;
	$("#codeResults").scrollTop($("#codeResults").height());
})

$(".links > a").hover(function(){
	$("#jan-img").css({
		opacity : 1,
		zindex : 1000
	});
}).mouseout(function(){
	$("#jan-img").css({
		opacity : 0.1,
		zindex : 0
	});
});

tiltConf = {
	// maxTilt : 30,
	// scale : 1.3
};

// $(".toTilt").tilt(tilConf);
$(".toTilt").tilt();

$.ripple(".card-proj", {
	debug: false, // Turn Ripple.js logging on/off
	on: 'mousedown', // The event to trigger a ripple effect

	opacity: 0.2, // The opacity of the ripple
	color: "black", // Set the background color. If set to "auto", it will use the text color
	multi: true, // Allow multiple ripples per element

	duration: 0.4, // The duration of the ripple

	// Filter function for modifying the speed of the ripple
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },

	easing: 'linear' // The CSS3 easing function of the ripple
});