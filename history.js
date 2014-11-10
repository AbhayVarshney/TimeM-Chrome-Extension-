chrome.history.onVisited.addListener(function(result){
	alert(result);
});

var callback = function(historyItem){
	console.log(historyItem);
	alert(historyItem);
}

chrome.history.onVisited.addListener(function(result){
	alert(result);
})

