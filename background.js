// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.browserAction.onClicked.addListener(function(tab) {
    var encoded_url = encodeURIComponent(tab.url);
	var decoded  = decodeURIComponent(encoded_url)  
    alert(decoded)
    chrome.tabs.create({ url: newURL });
});

function onAttach(tabId) {
  if (chrome.runtime.lastError) {
    alert(chrome.runtime.lastError.message);
    return;
  }

  chrome.windows.create(
      {url: "headers.html?" + tabId, type: "popup", width: 800, height: 600});
}