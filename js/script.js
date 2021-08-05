document.addEventListener("DOMContentLoaded",
	function(event) {

	$("#navbar-toggle").blur(function(event){
		var scrwidth = window.innerWidth;
		if(scrwidth < 767){
			$("#collapsable-nav").collapse('hide');
		}

	});

});