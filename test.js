'use strict';

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var getPageURL = tabs[0].url;
  var getPageTitle = tabs[0].title;
  var url = "https://twitter.com/intent/tweet?url="+getPageURL+"&text= "+getPageTitle;
  window.open(url,'test',"width=600,height=300");
});
