$(document).ready(function(){


	adjustContainer();
	$(window).resize(function(){
    	adjustContainer();
    });

	

    // UPDATED RESPONSIVE VIDEO DISPLAY
 	
    
  

    function adjustContainer(){
    	var $containerWidth = $('.video-item-container').width();

	    var $contentHeight = $containerWidth *.55;

	    var $titleHeight = $('.video-item-title').height();
	    var $viewLike = $('.video-item-views-likes-dislikes').height();

	    

	    $('.video-item-content').height($contentHeight);

	    var $containerHeight = $contentHeight + $titleHeight + $viewLike + 5;

	    // alert($contentHeight + ' ' + $titleHeight + ' ' + $viewLike + ' Container Height: ' + $containerHeight);
	    //adjust the height of the container to the height of content + height of title + height of views/like/dislikes
	    $('.video-item-container').height($containerHeight);

	    $('.video-item-container').css({'margin-bottom':'100'});


	    
    }


    
	setTimeout(function(){ 
		$('#modal-ads-container').css({'display':'block'});
		
		$('#playingvid')[0].pause();
		

	}, 15000);


	$('#modal-ads-container #close-ads-button').click(function(){
		$('#modal-ads-container').hide();
		$('#playingvid')[0].play();
	});




	// const fileToUploadbtn = document.getElementById('fileToUpload');
	// const custombtn = document.getElementById('custom-button');
	// const chosenfilebtn = document.getElementById('chosenfile');

	$('#custom-button').click(function(){
		$('#fileToUpload').click();
	});

	$('#fileToUpload').change(function(){
		if($('#fileToUpload').val()){
			var txt = $('#fileToUpload').val().replace(/.*(\/|\\)/, '');
			$('#chosenfile').text('Filename: ' + txt);
		} else{
			$('#chosenfile').text('No chosen file');
		}
		
		
	});
});