$('#login-button').click(function (event) {
	event.preventDefault();
	$('form').fadeOut(500);
	$('.wrapper').addClass('form-success');
	setTimeout(function () {
		location.href = "./BirthdayCake.html";
	}, 1000);
		//修改密码请改此处
    // if(userName=="123" &&  pwd=="123"){
	// 		event.preventDefault();
	// 		$('form').fadeOut(500);
	// 		$('.wrapper').addClass('form-success');
	// 		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	// 	}
	// else{
	// 	alert("Wrong Password");
	// }
});
