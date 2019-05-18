// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// There's a typo in the line below; oninstalled should be onInstalled.
chrome.runtime.onInstalled.addListener(function() {
    
  chrome.storage.sync.set({vip_paser_url: 'https://api.v6.chat/?url='}, function() {
  });

  
//   chrome.commands.onCommand.addListener(function(command) {
    
//   });
});

function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }
  

chrome.contextMenus.create({
    "title": "地址VIP解析播放",
    "contexts": ["page"],
    "onclick":function(info, tab){
        genericOnClick(info,tab);
        chrome.storage.sync.get(['vip_paser_url'], function(result) {
            chrome.tabs.remove(tab.id);
            //  console.log('Value currently is ' + JSON.stringify(result));
            window.open(result.vip_paser_url+tab.url);
            
            // chrome.tabs.executeScript(tab.id,{
            //     code:"<script>window.location.href='"+result.vip_paser_url+tab.url+"</script>"
            // },function(result){
                
            // });
        });
        
    }
});

chrome.contextMenus.create({
    "title": "连接VIP解析播放",
    "contexts": ["link"],
    "onclick":function(info, tab){
        // genericOnClick(info,tab);
        chrome.storage.sync.get(['vip_paser_url'], function(result) {
            // console.log('Value currently is ' + JSON.stringify(result));
            window.open(result.vip_paser_url+info.linkUrl);
        });
        
        
    }
});
