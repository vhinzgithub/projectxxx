$(document).ready(function(){
	
	var modal = document.getElementById('login-container');

	// Get the button that opens the modal
	var btn = document.getElementById("login-btn");
	var btn2 = document.getElementById("login-btn2");


	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("login-close")[0];

	// When the user clicks the button, open the modal 

	// btn.onclick = function() {
	//   modal.style.display = "block";

	  
	// }

	$('#login-btn').click(function(){
		modal.style.display = "block";
	})




	// btn2.onclick = function() {
	//   modal.style.display = "block";

	
	// }

	$('#login-btn2').click(function(){
		modal.style.display = "block";
	});

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	//   modal.style.display = "none";
	// }

	$('.login-close').click(function(){
		 modal.style.display = "none";
	});
	

	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}
});

