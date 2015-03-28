/* IN PROGRESS
	Google has a Content Security Policy which prevents inline script and many other features. 
	I left off with trying to get the username and password from the HTML document. 
	According to Google Documentation we need to get add an event listner to get these. 
	As of now I have tried using document.getElementbyID
*/

$(document).ready(function(){
	//Intializes Parse
	Parse.initialize("LcQYRvseB9ExXGIherTt1v2pw2MVzPFwVXfigo11", "F5enB5XfOfqo4ReAItZCkJVxOY76hoveZrOMwih9");

	//Function is called when sign in button is clicked
	$("#signIn").on('click', function(e){
		e.preventDefault();
		var pword = document.getElementById("txtpword");
		console.log(pword);

		/*
		//stores values of username and password
		var username = $("#username").val();
		var password = $("#password").val();
		
		//Checks to make sure that there is a valid length for the entries
		if(username.length < 0){
		  alert("Please type in your username"); 
		}
		if(password.length < 0){
		  alert("Please type in your password"); 
		}

		authenticateUser(username, password);
	});*/
	});
/*
	//Validates user
	//function to find an existing user
	function authenticateUser(username, password){
		Parse.User.logIn(username, password, {
			success: function(user) {
			// Do stuff after successful login.
				document.cookie="username=" + username;
				window.location.href = "http://timem-teamsnap.rhcloud.com/assignments.html";

			}, error: function(user, error) {
				// The login failed. Check error to see why.
				alert("Incorrect password or username");
			}
		});
	};


//This will gather the link of the current tab
	chrome.tabs.getSelected(null, function(tab) {
		document.getElementById('currentLink').innerHTML = tab.url;
	});
*/

});