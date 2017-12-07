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
	maxTilt : 3,
	scale : 1
};

// $(".toTilt").tilt(tilConf);
$(".card-main").tilt(tiltConf);

$.ripple(".card-proj", {
	debug: false, // Turn Ripple.js logging on/off
	on: 'mousedown', // The event to trigger a ripple effect

	opacity: 0.3, // The opacity of the ripple
	color: "#FEE745", // Set the background color. If set to "auto", it will use the text color
	multi: true, // Allow multiple ripples per element

	duration: 0.5, // The duration of the ripple

	// Filter function for modifying the speed of the ripple
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },

	easing: 'linear' // The CSS3 easing function of the ripple
});

$(".card-proj").click(function(){
	if ($(this).data("href") != undefined) {
		var url = $(this).data("href");
		setTimeout(function(){
			var win = window.open(url, '_blank');
  			win.focus();
		}, 1000);
	}
});

$(document).keypress(function(event) {
	if(event.which == 9) {
		$("#codeInput").focus();
	}
});