
function generateLinks(e){
  chrome.storage.sync.get(null, function(items){
    var html = "";
    for (key in items){
      html += "<div id=\"" + key + "\" class=\"waves-effect waves-light btn red accent-4\">" + key + "</div>";
    }
    if (html == ""){
      html += "<h6>No Save Data.</h6>";
    }
    document.getElementById('links').innerHTML = html;
  });
}

function removeLinks(e){
  var key = this.id;
  chrome.storage.sync.remove(key, function(items){
    window.location.reload();
  });
}

self.generateLinks();

document.addEventListener('DOMContentLoaded', function(){
  chrome.storage.sync.get(null, function(items){
    for (key in items){
      document.getElementById(key).addEventListener('click', removeLinks);
    }
  });
});

