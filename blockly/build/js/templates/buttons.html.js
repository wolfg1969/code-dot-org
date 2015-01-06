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
 buf.push('');1; var msg = require('../../locale/current/common'); ; buf.push('\n\n');3; if (data.ok) {; buf.push('  <div class="farSide" style="padding: 1ex 3ex 0">\n    <button id="ok-button" class="secondary">\n      ', escape((5,  msg.dialogOK() )), '\n    </button>\n  </div>\n');8; }; buf.push('\n');9; if (data.previousLevel) {; buf.push('  <button id="back-button" class="launch">\n    ', escape((10,  msg.backToPreviousLevel() )), '\n  </button>\n');12; }; buf.push('\n');13; if (data.tryAgain) {; buf.push('  ');13; if (data.isK1 && !data.freePlay) {; buf.push('    <div id="again-button" class="launch arrow-container arrow-left">\n      <div class="arrow-head"><img src="', escape((14,  data.assetUrl('media/tryagain-arrow-head.png') )), '" alt="Arrowhead" width="67" height="130"/></div>\n      <div class="arrow-text">', escape((15,  msg.tryAgain() )), '</div>\n    </div>\n  ');17; } else {; buf.push('    ');17; if (data.hintRequestExperiment === "left") {; buf.push('      <button id="hint-request-button" class="launch">\n        ', escape((18,  msg.hintRequest() )), '\n      </button>\n      <button id="again-button" class="launch">\n        ', escape((21,  msg.tryAgain() )), '\n      </button>\n    ');23; } else if (data.hintRequestExperiment == "right") {; buf.push('      <button id="again-button" class="launch">\n        ', escape((24,  msg.tryAgain() )), '\n      </button>\n      <button id="hint-request-button" class="launch">\n        ', escape((27,  msg.hintRequest() )), '\n      </button>\n    ');29; } else {; buf.push('      <button id="again-button" class="launch">\n        ', escape((30,  msg.tryAgain() )), '\n      </button>\n    ');32; }; buf.push('  ');32; }; buf.push('');32; }; buf.push('\n');33; if (data.nextLevel) {; buf.push('  ');33; if (data.isK1 && !data.freePlay) {; buf.push('    <div id="continue-button" class="launch arrow-container arrow-right">\n      <div class="arrow-head"><img src="', escape((34,  data.assetUrl('media/next-arrow-head.png') )), '" alt="Arrowhead" width="66" height="130"/></div>\n      <div class="arrow-text">', escape((35,  msg.continue() )), '</div>\n    </div>\n  ');37; } else {; buf.push('    <button id="continue-button" class="launch" style="float: right">\n      ', escape((38,  msg.continue() )), '\n    </button>\n  ');40; }; buf.push('');40; }; buf.push(''); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());