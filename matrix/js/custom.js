jQuery(document).ready(function() {

	var 
		degress = 0,
		timer = setInterval(function() {

			degress++;
			jQuery('.Zagl-3').css('background-image', 'linear-gradient(' + degress + 'deg, #11998e, #38ef7d');

		}, 30000 / 360);

});