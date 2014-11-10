
chrome.tabs.query({active : true,
	url: "http://www.facebook.com"
}, function(){
	alert("facebook tab is active");
}
	)