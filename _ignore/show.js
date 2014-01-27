$(document).ready(function(){
	$('.group-link').click(function () {
		$('#grid>.group').hide();
		$('#group-'+$(this).attr('id')).fadeIn();
	});

	$('.all').click(function () {
		$('#grid>.group').fadeIn();
	});
});