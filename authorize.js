function getAccessToken() {
	var request = require('request');
	var baseUrl = 'https://anilist.co/api/';
	var authUrl = baseUrl + 'auth/access_token';
	var formData= {
					"grant_type": "client_credentials",
					"client_id": "rootlocus-fqqqr",
					"client_secret": "C2Dn0UU53R5ZrUpPNvhRXRy9Tx9"
				  };

	var postLoad = {
		url: authUrl,
		formData: formData,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	request.post(postLoad,function(error,response,body){
		console.log("Access Token: " + body.access_token);  
		console.log("STATUS CODE: " + response.statusCode);
		if(response.statusCode === 200){
			return body.access_token;
		}else{
			return "Error: " + response.statusCode;
		}
	});
}