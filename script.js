

function submit(){
	
	var a;
	var nol ="";
	var submitted = confirm("Are you sure?");

	if (submitted == true){
		a = ("<h3> You have signed in! </h3>"); 
	}
	
	document.getElementById("after-sign").innerHTML= a;
	document.getElementById("after-sign-form").innerHTML= nol; 
	}
console.log("kokoh");