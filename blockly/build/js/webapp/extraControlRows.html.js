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
 buf.push('');1; var msg = require('../../locale/current/common') ; buf.push('\n');2; var webappMsg = require('../../locale/current/webapp') ; buf.push('\n\n');4; if (debugButtons) { ; buf.push('\n<div>\n  <div id="debug-buttons" style="display:inline;">\n    <button id="pauseButton" class="share">\n      ', escape((8,  webappMsg.pause() )), '\n    </button>\n    <button id="stepInButton" class="share">\n      ', escape((11,  webappMsg.stepIn() )), '\n    </button>\n    <button id="stepOverButton" class="share">\n      ', escape((14,  webappMsg.stepOver() )), '\n    </button>\n    <button id="stepOutButton" class="share">\n      ', escape((17,  webappMsg.stepOut() )), '\n    </button>\n  </div>\n');20; } ; buf.push('\n\n');22; if (debugConsole) { ; buf.push('\n  <div id="debug-console" class="debug-console">\n    <textarea id="debug-output" readonly disabled tabindex=-1 class="debug-output"></textarea>\n    <span class="debug-input-prompt">\n      &gt;\n    </span>\n    <div contenteditable id="debug-input" class="debug-input"></div>\n  </div>\n');30; } ; buf.push('\n\n');32; if (finishButton) { ; buf.push('\n  <div id="share-cell" class="share-cell-none">\n    <button id="finishButton" class="share">\n      <img src="', escape((35,  assetUrl('media/1x1.gif') )), '">', escape((35,  msg.finish() )), '\n    </button>\n  </div>\n');38; } ; buf.push('\n\n');40; if (debugButtons) { ; buf.push('\n</div>\n');42; } ; buf.push('\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());