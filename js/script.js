$('.filter_new').click(function(event){
	var i=$(this).data('filter');
	if (i==1) {
		$('.card').show();
	}else{
		$('.card').hide();
		$('.card.f_'+i).show();
	}
	$('.filter_new').removeClass('active');
	$(this).addClass('active');
	
	return false;
});