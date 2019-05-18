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



    
	
	

  // function adjustMainNavMainContentHeight{
  //     // Set left content and right content on the same height
  //     var rightcontent = $('#right-content').height();
  //     var leftcontent = $('#left-content').height();

    

  //     if (leftcontent<rightcontent){
  //       $('#left-content').height(rightcontent);
  //     } 

  //     if(leftcontent>rightcontent){
  //       $('#right-content').height(leftcontent);
  //   }
  // }
    

  //   adjustMainNavMainContentHeight();
      
    //   vidcontainerHeight = vidHeight + 60;
    //   $('.video-item-container').height(vidHeight);
    //   $('#page-title').text("Responsive Vide height: " + vidHeight + ' Container: ' + vidcontainerHeight);


    


    $(window).resize(function(){
    
    	//  if (leftcontent<rightcontent){
	    // 	$('#left-content').height(rightcontent);
	    // } 

	    // if(leftcontent>rightcontent){
	    // 	$('#right-content').height(leftcontent);
	    // }

 
      


    });


    //this is it
    

   
   $('.open-list').click(function(){
      $('.div-category').children('ul').removeClass('active');

      // $('.div-category').children('h4').children('a').text('▶');

      var txt = $(this).text();
      
      if(txt=='▲'){
         $(this).parent().parent().children('ul').addClass('active');

         $(this).text('▶');
      } else {
        $('.div-category').children('h4').children('a').text('▶');
      }
    
      
     


      $(this).parent().parent().children('ul').toggleClass('active');

   		if(txt=='▶'){
        $(this).text('▲');
      }else{
        $(this).text('▶');
      }

      
   		
   		
   });

    $('.login-link').click(function(){
        $('html, body').css({
          overflow: 'hidden',
          height: '100%'
        });

        $('#login-container').css({display:'block'});
    });


    $('#login-close-button').click(function(){

      $('html, body').css({
          overflow: 'auto',
          height: 'auto'
        });
      $('#login-container').css({display:'none'});
    });

  });