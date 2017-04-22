$(function(){
	$(".dl_btn").on("tap",function(){
		var phone_number=$(".dl_input").eq(0).val();
		var pasword=$(".dl_input").eq(1).val();
		if(phone_number=="18888888888"&&pasword=="123"){
			window.location.href="./service/service.html"
		}else{
			$(".dl_input").css("borderColor","red")
		}
	})

})