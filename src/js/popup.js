// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

"use strict";


function click(e) {
  var tagName = e.target.id.replace('id-', '');
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      id: tagName,
      color: e.target.name
    });
  });
}


document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll("button.cls-element");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", click);
  }
});