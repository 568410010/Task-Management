// check off specific toods by clicking 
$("ul").on("click", "li", function(){
	 $(this).toggleClass("completed"); 
}); 
$("span").on("click", function(){
	$(this).parent().fadeOut(500, function(){
		//$(this).remove(); //这里的this指的是parent
	});
	event.stopPropagation(); 
})


$("input[type='text']").keypress(function(event){
	if (event.which===13) {
		var todoText = $(this).val(); 
		$(this).val(""); 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText+"</li>"); 
	}
})


$(".fa-heart").on("click", function(){
	$("input[type='text']").fadeToggle(); 
})
	