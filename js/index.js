$(function(){
	$("#wrapper").load("./pages/customer.html");
	/*$(".mb_nav").css('display', 'none');
	$("#wrapper").css('display', 'none');*/
	// $(".content").load("./pages/homepage.html");

	/*// 当鼠标点击列表时跳转
	// 首页
	$(".title").click(function(){
		$(".content").load("./pages/homepage.html");
	})*/

	// 点击顾客管理选项列表时
	$(".btn_customer").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(1)").addClass("current");
		$("#wrapper").load("./pages/customer.html");
	})

	// 点击员工管理选项列表时
	$(".btn_waiter").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(2)").addClass("current");
		$("#wrapper").load("./pages/waiter.html");
	})

	// 点击分类管理选项列表时
	$(".btn_category").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(3)").addClass("current");
		$("#wrapper").load("./pages/category.html");
	})

	// 点击产品管理选项列表时
	$(".btn_product").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(4)").addClass("current");
		$("#wrapper").load("./pages/product.html");
	})

	// 点击订单管理选项列表时
	$(".btn_order").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(5)").addClass("current");
		$("#wrapper").load("./pages/order.html");
	})

	// 点击评论管理选项列表时
	$(".btn_comment").click(function(){
		$(".left_nav>li").removeClass("current");
		$(".left_nav>li:nth-child(6)").addClass("current");
		$("#wrapper").load("./pages/comment.html");
	})

});