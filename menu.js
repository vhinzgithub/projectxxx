$(document).ready(function(){



	

    $('#main-nav-toggle').click(function(){
      $('#main-nav-toggle').toggleClass('active');
      $('#left-content').toggleClass('active');

      if($('#search-bar-icon').hasClass('active')){
      	$('#search-bar-icon').toggleClass('active');
      	$('#search-bar-icon').children('span').removeClass();
      	$('#search-bar-icon').children('span').addClass('glyphicon glyphicon-search');
      	$('#search-bar-container').toggleClass('active');
      }
    });

    

    //toggle the icon of search
    $('#search-bar-icon').click(function(){
    	$('#search-bar-icon').toggleClass('active');

    	var myClass = $('#search-bar-icon').children('span').attr('class')

    	if(myClass == 'glyphicon glyphicon-search'){

    		$('#search-bar-icon').children('span').removeClass();
    		$('#search-bar-icon').children('span').addClass('glyphicon glyphicon-remove')
    	}else if(myClass == 'glyphicon glyphicon-remove'){
    		$('#search-bar-icon').children('span').removeClass();
    		$('#search-bar-icon').children('span').addClass('glyphicon glyphicon-search')
    	}

    	
    	$('#search-bar-container').toggleClass('active');

    	if($('#main-nav-toggle').hasClass('active')){
    		$('#main-nav-toggle').toggleClass('active');
    		$('#left-content').toggleClass('active');
    	}

    });

    

    $('.ads-close').click(function(){
    	$(this).parent('div').parent('div').hide();
    });



    // Set left content and righ content on the same height
    var rightcontent = $('#right-content').height();
    var leftcontent = $('#left-content').height();

  

    if (leftcontent<rightcontent){
    	$('#left-content').height(rightcontent);
    } 

    if(leftcontent>rightcontent){
    	$('#right-content').height(leftcontent);
    }
	
	
   
      
    //   vidcontainerHeight = vidHeight + 60;
    //   $('.video-item-container').height(vidHeight);
    //   $('#page-title').text("Responsive Vide height: " + vidHeight + ' Container: ' + vidcontainerHeight);

    

    


    $(window).resize(function(){
    
    	 if (leftcontent<rightcontent){
	    	$('#left-content').height(rightcontent);
	    } 

	    if(leftcontent>rightcontent){
	    	$('#right-content').height(leftcontent);
	    }

 
      


    });


   $('.open-list').click(function(){

      $(this).parent().parent().children('ul').toggleClass('active');

 
   		var txt = $(this).text();

      
   		if(txt=='▶'){
   			$(this).text('▲');
   		}else{
   			$(this).text('▶');
   		}
   		
   		
   });

   //  $(window).resize(function(){
   //  	 $windowWidth = $(window).width();
		 // $windowHeight = $(window).height();
		          

   //  	document.getElementById('ads').innerHTML = $windowWidth;
   //  });
  });