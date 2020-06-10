document.getElementById("rghtdir1").style.visibility= "hidden";
document.getElementById("pub_chat").style.visibility= "visible";
document.getElementById("leftdir2").style.visibility= "hidden";
document.getElementById("cont_box").style.visibility= "visible";




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

function hidePubChat() {

	document.getElementById("pub_chat").style.visibility= "hidden";
	document.getElementById("rghtdir1").style.visibility= "visible";
	document.getElementById("leftdir1").style.visibility= "hidden";
	}




function showPubChat() {

	document.getElementById("pub_chat").style.visibility= "visible";
	document.getElementById("rghtdir1").style.visibility= "hidden";
	document.getElementById("leftdir1").style.visibility= "visible";
	}


function hideContBox() {

	document.getElementById("cont_box").style.visibility= "hidden";
	document.getElementById("leftdir2").style.visibility= "visible";
	document.getElementById("rghtdir2").style.visibility= "hidden";
	}

function showContBox() {

	document.getElementById("cont_box").style.visibility= "visible";
	document.getElementById("leftdir2").style.visibility= "hidden";
	document.getElementById("rghtdir2").style.visibility= "visible";
	}



