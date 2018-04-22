
	document.getElementById("sunId").addEventListener("click", sunFunction);
			
	function sunFunction() {
		var sunImage = document.getElementById("sunDisplay").innerHTML =  '<img src="avatar.png">';
	}
	
	$(function () {
	  $(".showMenu").click(function () {
		$(this).next(".menu").fadeToggle(400);
	  });
	});
		