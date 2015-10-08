var sel1 = document.querySelector('#brand');
var sel2 = document.querySelector('#model');
var sel3 = document.querySelector('#version');
var options2 = sel2.querySelectorAll('option');
var options3 = sel3.querySelectorAll('option');

function giveSelection(box,selValue) {
  var sel;
  var options;
  if(box === 1) {
    sel = sel2;
    options = options2;
  } else {
    sel = sel3;
    options = options3;
  }
  sel.innerHTML = '';
  for(var i = 0; i < options.length; i++) {
    if(options[i].dataset.option === selValue) {
      sel.appendChild(options[i]);
    }
  }
  if(box === 1) {
    giveSelection(2,sel.value);
  }
}
giveSelection(1,sel1.value);

function getImage(code,type,url,gluon) {
  var el1 = document.getElementById('brand');
  var el2 = document.getElementById('model');
  var el3 = document.getElementById('version');
  var brand = el1.options[el1.selectedIndex].value;
  var model = el2.options[el2.selectedIndex].value;
  var version = el3.options[el3.selectedIndex].value;
  var imgURL = url + type + '/gluon-' + code + '-' + gluon + '-' + brand;
  if(model !== 'vmi') {
    imgURL += '-' + model;
  }
  if(version.length != 0) {
    imgURL += '-' + version;
  }
  if(type === 'sysupgrade') {
    imgURL += '-' + type;
  }
  if(version === 'kvm' || version === 'generic') {
    imgURL += '.img.gz';
  } else if(version === 'virtualbox') {
    imgURL += '.vdi';
  } else if(version === 'vmware') {
    imgURL += '.vmdk';
  } else {
    imgURL += '.bin';
  }
  window.location = imgURL;
}
