$(function(){
	var lbtwidth=$(window).width();
	var lbtheight=lbtwidth*0.625;
	var lbtpic=$(".lbt_pic");
	var lbtpic_box=$(".top_lbt_box");
	var now=0;
	var lg=lbtpic.length;
	lbtpic.width(lbtwidth);
	lbtpic.height(lbtheight);
	lbtpic_box.height(lbtheight);

	function autolb(){
		lbtpic_box.animate({
			"margin-left": -lbtwidth
		},800,'ease',function(){
			lbtpic.eq(0).appendTo(lbtpic_box);
			lbtpic_box.css("margin-left","0");
		})
	}
	setInterval(autolb(),1000);

})