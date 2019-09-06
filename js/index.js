$(function(){
	// 进入页面自动加载首页
	$(".mb_nav").css('display', 'none');
	$("#wrapper").load("./pages/homepage.html");

	// 点击首页标题出现首页页面
	$(".title").on("click",function(){
		$(".mb_nav").css('display', 'none');
		var url = $(this).attr("url");
		$(".left_nav>li").removeClass("current");
		$("#wrapper").load(url);
	})

	// 点击列表时跳转页面
	$("ul.left_nav").on("click","li",function(){
		$(".mb_nav").css('display', 'block');
		var url = $(this).attr("url");
		$(".left_nav>li").removeClass("current");
		$(this).addClass("current");
		$("#wrapper").load(url);
	})

});