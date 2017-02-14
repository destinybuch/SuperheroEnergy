$(document).ready(function(){
	// alert("im working")
	$(".fa-hand-o-right").addClass("animated infinite wobble");

	$(".zap, .zap2").addClass("animated rollIn");

	$(".behindBolt").hide();

	$(document).scroll(function() {
		$(".behindBolt").show();
		$(".behindBolt").addClass("animated fadeInUp");
	});

	// $(document).scroll(900 function() {
	// 	$
	// }

	$(".flavorImg").addClass("animated fadeInUp");
		// $(".flavorImg1").delay(2)
	
	$(".flavorImg1").addClass("animated fadeInUp");

	$(".flavorImg2").addClass("animated fadeInUp");

	$(".newButton").mouseenter(function(){
		$(this).addClass("animated infinite tada")
	});
	$(".newButton").mouseleave(function(){
		$(this).removeClass("animated infinite tada")
	});
	
	$(".getTickets").mouseenter(function(){
		$(this).addClass("animated infinite tada")
	});
	$(".getTickets").mouseleave(function(){
		$(this).removeClass("animated infinite tada")
	});

	$(".getTickets").on("click", function() {
		alert("Your ticket has been saved!");
	});
	

});