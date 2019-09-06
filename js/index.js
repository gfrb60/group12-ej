$(function(){
	
	// 点击列表时跳转页面
	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
		$(".left_nav>li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);
	})

	// 模拟点击第一个li
	$("ul.left_nav>li:first-child").trigger('click');



	/*$(".mb_nav").css('display', 'none');
	$("#wrapper").css('display', 'none');*/
	// $(".content").load("./pages/homepage.html");

	/*// 当鼠标点击列表时跳转
	// 首页
	$(".title").click(function(){
		$(".content").load("./pages/homepage.html");
	})*/

});