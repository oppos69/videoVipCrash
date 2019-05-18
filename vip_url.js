'use strict';

function save_url(){
    let txt_vip = document.getElementById('txt_vip_url');
    let vip_url = txt_vip.value;
    console.log(vip_url);
    chrome.storage.sync.set({vip_paser_url: vip_url}, function() {
        console.log(vip_url);
    });
}

chrome.storage.sync.get(["vip_paser_url"], function(result) {
    // console.log(vip_url);
    document.getElementById('txt_vip_url').value = result.vip_paser_url;
});

document.getElementById('btn_save').addEventListener('click', save_url);