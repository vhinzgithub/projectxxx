
$(document).ready(function(){
	$('.vids').hover(function(){
		// $(this)[0].playBackRate=100; play fast
		$(this)[0].play();

	},
	function(){
		$(this)[0].load();
		alert('stop playing');
	});
});
