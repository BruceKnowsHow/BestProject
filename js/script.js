
	document.getElementById("sunId").addEventListener("click", sunFunction);
			
	function sunFunction() {
		var sunImage = document.getElementById("sunDisplay").innerHTML =  '<img src="avatar.png">';
	}
	
	function increaseFont(){
		document.getElementById("paragraph1").style.fontSize = "xx-large";
	}
	
	$(function () {
	  $(".showMenu").click(function () {
		$(this).next(".menu").fadeToggle(400);
	  });
	});