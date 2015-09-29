var sel1 = document.querySelector('#manu');
var sel2 = document.querySelector('#model');
var sel3 = document.querySelector('#version');
var options2 = sel2.querySelectorAll('option');
var options3 = sel3.querySelectorAll('option');

function giveSelection(selValue) {
  sel2.innerHTML = '';
  for(var i = 0; i < options2.length; i++) {
    if(options2[i].dataset.option === selValue) {
      sel2.appendChild(options2[i]);
    }
  }
}
giveSelection(sel1.value);

function giveSelection2(selValue) {
  sel3.innerHTML = '';
  for(var i = 0; i < options3.length; i++) {
    if(options3[i].dataset.option === selValue) {
      sel3.appendChild(options3[i]);
    }
  }
}
giveSelection2(sel2.value);

function getImage(code,type,url,version) {
  var sel = document.getElementById('manu');
  var manu = sel.options[sel.selectedIndex].value;
  var sel2 = document.getElementById('model');
  var model = sel2.options[sel2.selectedIndex].value;
  var sel3 = document.getElementById('version');
  var mversion = sel3.options[sel3.selectedIndex].value;
  window.location = url + type + '/gluon-' + code + '-' + version + '-' + manu + '-' + model + mversion;
}
