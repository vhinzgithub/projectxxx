$(document).ready(function(){

	$('#choosefilebutton').click(function(){
		$('#fileupload').click();
	});


	$('#fileupload').change(function(){

		if($('#fileupload').val()){
			var txt = $('#fileupload').val().replace(/.*(\/|\\)/, '');
			$('#chosenfile').text(txt);
		} else{
			$('#chosenfile').text('No chosen file');
		}
	});
});