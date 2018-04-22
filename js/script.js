
	document.getElementById("sunId").addEventListener("click", sunFunction);
			
	function sunFunction() {
		var sunImage = document.getElementById("sunDisplay").innerHTML =  '<img src="avatar.png">';
	}
	
	function increaseFont(){
		document.getElementById("paragraph1").style.fontSize = "xx-large";
	}
	
	
	function map(){
					var audio = document.getElementById("song1");
					
					setTimeout(alert(""), 2000);
					setTimeout(song1.play(), 2000);
				}
				
	}

	
	$(function () {
	  $(".showMenu").click(function () {
		$(this).next(".menu").fadeToggle(400);
	  });
	});
	
	
	