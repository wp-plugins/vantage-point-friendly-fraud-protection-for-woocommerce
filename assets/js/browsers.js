if (check_browser()){
		(function() {
			var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true;
			ga.src = "https://s1.getvantagepoint.com/app/framework/js/application.js";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(ga, s);
	  })();
}

function check_browser(){
	var is_chrome = navigator.userAgent.indexOf('Chrome')>-1;
	var is_explorer = navigator.userAgent.indexOf('.NET')>-1;
	var is_firefox = navigator.userAgent.indexOf('Firefox')>-1;
	var is_safari = navigator.userAgent.indexOf("Safari")>-1;
	var is_Opera = navigator.userAgent.indexOf("Presto")>-1;
	if ((is_chrome) && (is_safari)) is_safari=false;
	if (is_chrome) return true;
	if (is_explorer) return true;
	if (is_firefox) return true;	
	if (is_safari) return true;	
	if (is_Opera) return true;	
	return false;
}


		

		

		


	

