chrome.history.onVisited.addListener(function(result){
	alert(result);
});

/*
chrome.tabs.query({active : true,
	url: "*.google.com*"
}, function(){
	alert("google tab is active");
}
	);*/

var callback = function(historyItem){
	console.log(historyItem);
	alert(historyItem);
}

chrome.history.onVisited.addListener(function(result){
	alert(result);
})

