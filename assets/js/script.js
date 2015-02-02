// JavaScript Document

function createVantageAccount() {
	var full_name    = document.wp_signup.full_name.value;
	var email        = document.wp_signup.email.value;
	var website      = document.wp_signup.web_url.value;
	var password1    = document.wp_signup.password1.value;
	var password2    = document.wp_signup.password2.value;
	
	document.getElementById("validate").innerHTML = "";
	
	if (full_name=='' || full_name.length<3 || full_name.length>100){
		//alert ("Name should be 3 to 100 characters long.");
		document.getElementById("validate").innerHTML = "Name should be 3 to 100 characters long.";
		return false;
		
	} else if (email=='' || email.length<10 || length.email>150 || !email.indexOf("@") || !email.indexOf(".")){
		//alert ("Please enter valid email address");
		document.getElementById("validate").innerHTML = "Please enter valid email address";
		return false;
	
	} else if (password1=='' || password1.length<4 || password1.length>15){
		//alert ("Please enter password between 4 to 15 characters long.");
		document.getElementById("validate").innerHTML = "Please enter password between 4 to 15 characters long.";
		return false;
		
	} else if (password2=='' || password2.length<4 || password2.length>15){
		//alert ("Please enter re-password between 4 to 15 characters long.");
		document.getElementById("validate").innerHTML = "Please enter re-password between 4 to 15 characters long.";
		return false;
	
	} else if (password1 != password2){
		//alert ("Passwords does not match");
		document.getElementById("validate").innerHTML = "Passwords does not match";
		return false;
		
	}
return true;
//document.wp_signup.submit();
}



function login_existing() {
	//alert ("okzzzzzz");
	var email        = document.wp_signup2.email.value;
	var password1    = document.wp_signup2.password1.value;
	
	document.getElementById("validate2").innerHTML = "";
	
	if (email=='' || email.length<10 || length.email>150 || !email.indexOf("@") || !email.indexOf(".")){
		//alert ("Please enter valid email address");
		document.getElementById("validate2").innerHTML = "Please enter valid email address";
		return false;
	
	} else if (password1=='' || password1.length<4 || password1.length>15){
		//alert ("Please enter password between 4 to 15 characters long.");
		document.getElementById("validate2").innerHTML = "Please enter password between 4 to 15 characters long.";
		return false;
		
	} 
return true;
//document.wp_signup.submit();
}


function forgot_page() {
	
	var email        = document.wp_signup3.email.value;	
	document.getElementById("validate3").innerHTML = "";
	
	if (email=='' || email.length<10 || length.email>150 || !email.indexOf("@") || !email.indexOf(".")){
		//alert ("Please enter valid email address");
		document.getElementById("validate3").innerHTML = "Please enter valid email address";
		return false;
	
	}  
return true;
//document.wp_signup.submit();
}


function load_dashboard(){
	location.reload(false);
}
function load_dashboard2(){
	location.reload(true);
}
function new_user(){
	document.getElementById('create_form').style.display='block';
	document.getElementById('existing_form').style.display='none';
	document.getElementById('forgot_form').style.display='none';
}

function existing_user(){
	document.getElementById('create_form').style.display='none';
	document.getElementById('existing_form').style.display='block';
	document.getElementById('forgot_form').style.display='none';
}

function forgot(){
	document.getElementById('create_form').style.display='none';
	document.getElementById('existing_form').style.display='none';
	document.getElementById('forgot_form').style.display='block';
}
function try_again(){
	//alert ("abc");
	document.getElementById('FinishedSignup').style.display='none';
	document.getElementById('create_form').style.display='none';
	document.getElementById('tbl_form').style.display='block';
	document.getElementById('existing_form').style.display='block';
	document.getElementById('forgot_form').style.display='none';
}