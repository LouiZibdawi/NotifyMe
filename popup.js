// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

var test = document.getElementById('test')
test.innerHTML = "hi"

var userEmail;
checkForEmail()

function checkForEmail() {
    chrome.storage.sync.get(['email'], function(result) {

        if(!chrome.runtime.lastError) {
            console.log('Value currently is ' + result.key)
            userEmail = result.key
        }
        console.log('No value currently set!')
    })

    if(userEmail != null) {
        var newStr = "Emails will be sent to: <br>" + result.key;

        document.getElementById('enterEmail').innerHTML = newStr
        document.getElementById('emailBox').style.visibility = "hidden"
    }
}

function setEmail() {
    
    var test = document.getElementById('test')
    test.innerHTML = "hi"

    var email = document.getElementById('emailBox').value

    chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.set[{'email': email}], function(result) {
            console.log('Value currently is ' + email);
        });
  });

})