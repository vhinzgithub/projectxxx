$(document).ready(function(){
	adjustContainer();
	$(window).resize(function(){
    	adjustContainer();
    });

	

    
 	
    
  

    function adjustContainer(){
    	var $containerWidth = $('.video-item-container').width();

	    var $contentHeight = $containerWidth *.55;

	    var $titleHeight = $('.video-item-title').height();
	    var $viewLike = $('.video-item-views-likes-dislikes').height();

	    

	    $('.video-item-content').height($contentHeight);

	    var $containerHeight = $contentHeight + $titleHeight + $viewLike

	    // alert($contentHeight + ' ' + $titleHeight + ' ' + $viewLike + ' Container Height: ' + $containerHeight);
	    //adjust the height of the container to the height of content + height of title + height of views/like/dislikes
	    $('.video-item-container').height($containerHeight);

	    $('.video-item-container').css({'margin-bottom':'100'});
    }

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