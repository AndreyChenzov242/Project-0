$(function(){
	
	$('.click').on('click', function(){
		
		$('.container-burger').slideToggle(1, function(){
			
			if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
               // $('.container-burger').height(('.container').height());
		}
		
	});
	
 });
	
});