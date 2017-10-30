function isFullScreen() {
	return ((window.fullScreen) || (window.innerWidth == screen.width && window.innerHeight == screen.height));
}

function getTimestamp() {
	return Math.round((new Date()).getTime() / 1000);
}