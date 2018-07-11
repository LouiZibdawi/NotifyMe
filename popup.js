// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

function checkForEmail() {
    //Clear Storage by uncommenting next line
    //chrome.storage.sync.clear()

    chrome.storage.sync.get('email', function (result) {

        if (!chrome.runtime.error) {
            if (result.email != null) {
                console.log('Email currently is ' + result.email)

            }
        }
        buildPopup(result.email)
    });
}

function buildPopup(userEmail) {
    var body = document.getElementById('popup')

    //If email exists in storage
    if(!(userEmail == null)) {
        var subheader = document.getElementById('subheader')
        subheader.innerHTML = "Emails will be sent to: " + userEmail

        var emailTextBox = document.getElementById('emailTextBox')
        emailTextBox.style.visibility = "hidden"

        var submitBtn = document.getElementById('submitEmail')
        submitBtn.value = "Remove Email"
    }
}

document.addEventListener('DOMContentLoaded', function() {

    checkForEmail()

    document.getElementById("submitEmail").addEventListener("click", setEmail);
});

function setEmail() {
    console.log("PLEASEEEE")

    var btn = document.getElementById('submitEmail')

    if(btn.value === "Submit Email") {
        var newEmail = document.getElementById('emailTextBox').value
        if(newEmail != null && newEmail != "") {
            chrome.storage.sync.set({'email': newEmail}, function() {
                if(chrome.runtime.error) {
                    console.log("Runtime error")
                }
                else {
                    alert("Set email to " + newEmail)
                    console.log('User email is set to ' + newEmail)
                    window.close();
                }
            });
        }
    }
    else {
        removeEmail()
    }
}

function removeEmail() {
    chrome.storage.sync.remove('email', function(result){})
    window.close();
}