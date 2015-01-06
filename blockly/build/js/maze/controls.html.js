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
 buf.push('');1; var msg = require('../../locale/current/maze') ; buf.push('\n\n<button id="stepButton" class="launch ', escape((3,  showStepButton ? '' : 'hide' )), ' float-right">\n  ');4; // splitting these lines causes an extra space to show up in front of the word, breaking centering 
; buf.push('\n  <img src="', escape((5,  assetUrl('media/1x1.gif') )), '">', escape((5,  msg.step() )), '\n</button>\n\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());