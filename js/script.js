
$(document).ready(function(){
	JekyllSearch();
	$("body").css("background-color", localStorage.getItem("bodyBackgroudColor"));
	$("#BtnGreen").click(function(){
		$("body").css("background-color", "rgb(219, 238, 221)");
		localStorage.setItem("bodyBackgroudColor", "rgb(219, 238, 221)");
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

