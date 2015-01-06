module.exports= (function() {
  var t = function anonymous(locals, filters, escape, rethrow) {
escape = escape || function (html){
  return String(html)
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
};
var buf = [];
with (locals || {}) { (function(){ 
 buf.push('');1; var msg = require('../../locale/current/common') ; buf.push('\n\n');3; if (showSlider) { ; buf.push('\n  <div id="slider-cell">\n    <svg id="webapp-slider"\n         xmlns="http://www.w3.org/2000/svg"\n         xmlns:svg="http://www.w3.org/2000/svg"\n         xmlns:xlink="http://www.w3.org/1999/xlink"\n         version="1.1"\n         width="150"\n         height="50">\n        <!-- Slow icon. -->\n        <clipPath id="slowClipPath">\n          <rect width=26 height=12 x=5 y=14 />\n        </clipPath>\n        <image xlink:href="', escape((16,  assetUrl('media/webapp/turtle_icons.png') )), '" height=42 width=84 x=-21 y=-10\n            clip-path="url(#slowClipPath)" />\n        <!-- Fast icon. -->\n        <clipPath id="fastClipPath">\n          <rect width=26 height=16 x=120 y=10 />\n        </clipPath>\n        <image xlink:href="', escape((22,  assetUrl('media/webapp/turtle_icons.png') )), '" height=42 width=84 x=120 y=-11\n            clip-path="url(#fastClipPath)" />\n    </svg>\n    <img id="spinner" style="visibility: hidden;" src="', escape((25,  assetUrl('media/webapp/loading.gif') )), '" height=15 width=15>\n  </div>\n');27; } ; buf.push('\n\n<div id="soft-buttons" class="soft-buttons-none">\n  <button id="leftButton" class="arrow">\n    <img src="', escape((31,  assetUrl('media/1x1.gif') )), '" class="left-btn icon21">\n  </button>\n  <button id="rightButton" class="arrow">\n    <img src="', escape((34,  assetUrl('media/1x1.gif') )), '" class="right-btn icon21">\n  </button>\n  <button id="upButton" class="arrow">\n    <img src="', escape((37,  assetUrl('media/1x1.gif') )), '" class="up-btn icon21">\n  </button>\n  <button id="downButton" class="arrow">\n    <img src="', escape((40,  assetUrl('media/1x1.gif') )), '" class="down-btn icon21">\n  </button>\n</div>\n\n');44; if (finishButton) { ; buf.push('\n  <div id="share-cell" class="share-cell-none">\n    <button id="finishButton" class="share">\n      <img src="', escape((47,  assetUrl('media/1x1.gif') )), '">', escape((47,  msg.finish() )), '\n    </button>\n  </div>\n');50; } ; buf.push('\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());