
function saveLinks(e){
  chrome.tabs.getAllInWindow(function (tabs){
    var arr = [];
    for (var i = 0; i < tabs.length; i++){
      arr[i] = tabs[i].url;
    }
    var obj = {}; 
    var key = document.getElementById('in').value;
    if (key == ""){
      document.getElementById('error').innerHTML = "ERROR: BLANK INPUT";
      return;
    }
    obj[key] = arr;
    chrome.storage.sync.set(obj, function(){ 
      window.close();
    });
  });

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', saveLinks);
  document.getElementById('in').select();
});

