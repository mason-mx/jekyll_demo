function $(id)
{
    return document.getElementById(id);
}
function filter(liId)
{
	var items = $("posts").getElementsByTagName("li"), i;
	for (i = 0; i < items.length; i +=1 )
	{
		items[i].style.display = "none";
	}
	var litoshow = document.getElementsByClassName(liId);
	for (i = 0; i < litoshow.length; i +=1 ) {
		litoshow[i].style.display = "block";
	}
}
function showCategory(CategoryId)
{
    $("#wrapper").css("display","none");
    $("#content").css("display","block");
    filter(CategoryId)
}
function showCards()
{
    var div1 = $("content");
    var div2 = $("wrapper");
    div1.style.display = "none";
    div2.style.display = "block";
}

