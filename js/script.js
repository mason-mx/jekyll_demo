$(document).ready(function(){
	JekyllSearch();
	$("#BtnGreen").click(function(){
		$(".post-container").css("background-color", "rgb(219, 238, 221)");
		$("#mySideBtn").animate({right	: '0'});
		$("#mySidenav").css("width","0");
	});
	$("#mySideBtn").click(function(){
		$("#mySideBtn").animate({right: '110px'});
		$("#mySidenav").css("width","110px");
	});
	$(".closebtn").click(function(){
		$("#mySideBtn").animate({right	: '0'});
		$("#mySidenav").css("width","0");
	});
});

