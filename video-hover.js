
$(document).ready(function(){
	
	
	$('.vid').hover(function(){
		
		$(this)[0].play();
		
	},
	function(){
		$(this)[0].load();
	});
});
