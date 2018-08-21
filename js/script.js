
$(document).ready(function(){
	JekyllSearch();

	askWeather();
	// call every 45 minutes
	setInterval(askWeather, 2700000);

	$("body").css("background-color", localStorage.getItem("bodyBackgroudColor"));
	$("#BtnGreen").click(function(){
		$("body").css("background-color", "rgb(219, 238, 221)");
		localStorage.setItem("bodyBackgroudColor", "rgb(219, 238, 221)");
		$("#mySideBtn").animate({right	: '0'});
		$("#myFloatBar").css("width","0");
	});

	$("#BtnNight").click(function(){
		$("body").css("background-color", "rgb(255, 255, 255)");
		localStorage.setItem("bodyBackgroudColor", "rgb(255, 255, 255)");
		$("#mySideBtn").animate({right	: '0'});
		$("#myFloatBar").css("width","0");
	});

	$("#mySideBtn").click(function(){
		$("#mySideBtn").animate({right: '110px'});
		$("#myFloatBar").css("width","110px");
	});

	$("#myFloatBar .closeBtn").click(function(){
		$("#mySideBtn").animate({right	: '0'});
		$("#myFloatBar").css("width","0");
	});

	$("#mySidenav .closeBtn").click(function(){
		$("#mySidenav").css("width","0");
	});

	$("#mySidenav .catagories").click(function(){
		$("#mySidenav").css("width","0");
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,60);
		
		return false;
	});

	$('#homeMenu').click(function(){
		$("#mySidenav").css("width","180px");
	});
/*
	$(window).scroll(function(e){
		//获取要定位元素距离浏览器顶部的距离
		var navH = $("#category-1").offset().top;
		var navH1 = $("#topbar").position().top + $("#topbar").outerHeight(true);;
		console.log(navH1);

		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		console.log(scroH);
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH >= navH){
			//$("#category-1").css({"position":"fixed","top":50});
		}else{
			//$("#category-1").css({"position":"static"});
		}
		
	});
*/
});
