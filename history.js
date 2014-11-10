/*	
chrome.tabs.query({active : true,
	url: *facebook.com 
}, function(){
	console.log("facebook tab is active");
}
	);
*/

var callback = function(historyItem){
	alert("was onVisited" + historyItem);
}
chrome.history.onVisited.addListener(function callback)