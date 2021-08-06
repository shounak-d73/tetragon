(function(global) {

	var ajaxutils={};

	function getRequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}

		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
	}


ajaxutils.sendGetRequest=function(requesturl, responseHandler) {
	var request=getRequestObject();
	request.onreadystatechange=function() {
		handleResponse(request, responseHandler);
	};
	request.open("GET", requesturl,true);
	request.send(null);
};


function handleResponse(request, responseHandler) {

	if((request.readyState == 4) && (request.status == 200)) {
		responseHandler(request);
	}
}

global.$ajaxutils = ajaxutils;

})(window);
