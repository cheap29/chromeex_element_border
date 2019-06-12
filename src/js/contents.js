"use strict";

// popup -> contents(popup/option -> contents)
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var el = document.getElementsByTagName(message.id);
  //alert('popup より受信 / ' + message.id + " / " + el.length);
  for (var i = 0; i < el.length; i++) {
    el[i].style.border = "dotted 5px " + message.color;
  }
  return;
});