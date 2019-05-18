$(document).ready(function(){

    var $containerWidth = $('.video-item-container').width();
    var $containerHeight = $containerWidth * .7;
    $('.video-item-container').height($containerHeight);

 	if($containerHeight<320){
 		var $content = $containerHeight - 40;
 	} else{
 		var $content = $containerHeight - 60;
 	}
    
    $('.video-item-content').height($content);
    

    $('#page-title').text('Container width: ' + $containerWidth + ' Container Height: ' + $containerHeight);
   
    $(window).resize(function(){

    	$containerWidth = $('.video-item-container').width();
    	$containerHeight = $containerWidth * .7;

    	$('.video-item-container').height($containerHeight);
	    if($containerHeight<320){
	 		var $content = $containerHeight - 40;
	 	} else{
	 		var $content = $containerHeight - 60;
	 	}
     	
 
    	$('#page-title').text('Container Height: ' + $containerHeight);
    })


	// function videoDisplayProportion(){
      

 //      // if (windowWidth <=320){
 //      // } else if (windowWidth <=480 ){
 //      // }else if (windowWidth <=640 ){
 //      // }else if (windowWidth <=768 ){
 //      // }else if (windowWidth <=992 ){
 //      // }else if (windowWidth <=1200 ){
 //      // }else{
 //      // }
 //    }

 //    videoDisplayProportion();

});