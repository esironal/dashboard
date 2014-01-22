$(document).ready(function(){
	$('.links').click(function () {
		$('#grid>.bloc').hide();
		$('#bloc-'+$(this).attr('id')).fadeIn();
	});

	$('.all').click(function () {
		$('#grid>.bloc').fadeIn();
	});
});