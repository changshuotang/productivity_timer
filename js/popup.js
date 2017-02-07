
function goLoadPage(e){
  window.location.href="loadpage.html";
}

function goSavePage(e){
  window.location.href="savepage.html";
}

function goDeletePage(e){
  window.location.href="deletepage.html";
}

document.addEventListener('DOMContentLoaded', function () {
  /**
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', openLinks);
  }
  
  document.getElementById('red').addEventListener('click', saveLinks);
  **/
  document.getElementById('delete').addEventListener('click', goDeletePage);
  document.getElementById('load').addEventListener('click', goLoadPage);
  document.getElementById('save').addEventListener('click', goSavePage);
});













