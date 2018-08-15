$(function(){
	$('.tabs-title>li').click(function(){
		//菜单切换
		$(this).addClass('select')
		.siblings().removeClass('select');
		var index=$(this).index();
		//内容切换
		$('.tabs-content>div').eq(index)
		.addClass('select').siblings().removeClass('select');
	});
});