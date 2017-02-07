
function generateLinks(e){
  chrome.storage.sync.get(null, function(items){
    var html = "";
    for (key in items){
      html += "<div id=\"" + key + "\" class=\"waves-effect waves-light btn teal darken-2\">" + key + "</div>";
    }
    if (html == ""){
      html += "<h6>No Save Data.</h6>";
    }
    document.getElementById('links').innerHTML = html;
  });
}

function openLinks(e){
  var key = this.id;
  chrome.storage.sync.get(key, function(items){
    for (var i = 0; i < items[key].length; i++){
      chrome.tabs.create({ url: items[key][i] });  
    }
  });
}

self.generateLinks();

document.addEventListener('DOMContentLoaded', function(){
  chrome.storage.sync.get(null, function(items){
    for (key in items){
      document.getElementById(key).addEventListener('click', openLinks);
    }
  });
});



