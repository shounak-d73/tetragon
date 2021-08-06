$(function() {

	$("#navbar-toggle").blur(function(event) {
		var screenwidth = window.innerWidth;
		if(screenwidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}

	});

});


(function (global) {

	var tecpl={};

	var homehtml="main-body/home-body.html";

	var inserthtml =function (selector, html) {
		var targetele =document.querySelector(selector);
		targetele.innerHTML =html;
	};

	var showloading = function (selector) {
		var html= "<div class='text-center'>";
		html+="<img src='images/ajax-loader.gif'></div>";
		inserthtml(selector, html);
	};

	document.addEventListener("DOMContentLoaded", function(event) {
		showloading("#main-content");
		$ajaxutils.sendGetRequest(homehtml, function(responseText) {

			document.querySelector("#main-content").innerHTML=responseText;
		},
		false);

	});

global.$tecpl=tecpl;

})(window);
