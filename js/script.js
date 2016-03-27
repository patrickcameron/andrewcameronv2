var feed = new Instafeed({
    get: 'user',
    accessToken: '416569799.1677ed0.1e2bf2e066ae43068d5157a7014033b2',
    clientId: '76c3279c838349e98d799054919aa2df',
    userId: '2040104098',
    limit: 10,
    resolution: 'standard_resolution'
});

var currentTime = new Date();
var year = currentTime.getFullYear();

feed.run();

$(function() {
	$('span.year').text(year);

	$('.main-gallery').flickity({
	  contain: true,
	  wrapAround: true,
	  pageDots: false,
	  imagesLoaded: true
	});

	smoothScroll.init();

	$('a#moreBioLink').click(function(e) {
		e.preventDefault();
		$('p.longerBio').toggle();
	});

	if ($('body.bioBackground').length) {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 50) {
				$('div.bioTransparency').fadeIn( 1000 );
			}
			if ($(this).scrollTop() < 50) {
				$('div.bioTransparency').fadeOut( 500 );
			}
		})
	};
});