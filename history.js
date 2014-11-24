/*
chrome.history.onVisited.addListener(function(result){
	alert(result);
});
*/
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Turning ' + tab.url + ' red!');
	chrome.tabs.executeScript({
	    code: 'document.body.style.backgroundColor="red"'
	  });
});



