var curIndex=0;
var handler=null;
function changeImg(nextIndex){
//切换图片
$('.banner-title>li')
.eq(curIndex).removeClass('select')
.end().eq(nextIndex).addClass('select');
$('.banner-imgs>li')
.eq(curIndex).removeClass('select')
.end().eq(nextIndex).addClass('select');
//更新辅助变量
curIndex=nextIndex;
}
//自动切换
function autoChange(){
	handler=setInterval(function(){
		var nextIndex=curIndex+1==$('.banner-title>li').length?0:curIndex+1;
		changeImg(nextIndex);
	},2000);
}
//点击切换
function clickChange(){
	$('.banner-title>li').click(function(){
		changeImg($(this).index());
	});
}
function initBanner(){
	//1.开始banner的自动切换
	autoChange();
	//2.绑定指定切换
	clickChange();
	//3.鼠标滑入滑出
	$('.banner').hover(
		function(){clearInterval(handler);},
		function(){autoChange();}
	);
}

$(function(){
	initBanner();
});