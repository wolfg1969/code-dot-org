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
 buf.push('');1;
  var msg = require('../../locale/current/common');
  var hideRunButton = locals.hideRunButton || false;
; buf.push('\n\n<div id="rotateContainer" style="background-image: url(', escape((6,  assetUrl('media/mobile_tutorial_turnphone.png') )), ')">\n  <div id="rotateText">\n    <p>', escape((8,  msg.rotateText() )), '<br>', escape((8,  msg.orientationLock() )), '</p>\n  </div>\n</div>\n\n');12; var instructions = function() {; buf.push('  <div id="bubble" class="clearfix">\n    <table id="prompt-table">\n      <tr>\n        <td id="prompt-icon-cell">\n          <img id="prompt-icon"/>\n        </td>\n        <td id="prompt-cell">\n          <p id="prompt">\n          </p>\n        </td>\n      </tr>\n    </table>\n    <div id="ani-gif-preview-wrapper">\n      <div id="ani-gif-preview">\n        <img id="play-button" src="', escape((26,  assetUrl('media/play-circle.png') )), '"/>\n      </div>\n    </div>\n  </div>\n');30; };; buf.push('\n');31; // A spot for the server to inject some HTML for help content.
var helpArea = function(html) {; buf.push('  ');32; if (html) {; buf.push('    <div id="helpArea">\n      ', (33,  html ), '\n    </div>\n  ');35; }; buf.push('');35; };; buf.push('\n<div id="visualizationColumn">\n  <div id="visualization">\n    ', (38,  data.visualization ), '\n  </div>\n\n  <div id="belowVisualization">\n\n    <div id="gameButtons">\n      <button id="runButton" class="launch blocklyLaunch ', escape((44,  hideRunButton ? 'invisible' : '')), '">\n        <div>', escape((45,  msg.runProgram() )), '</div>\n        <img src="', escape((46,  assetUrl('media/1x1.gif') )), '" class="run26"/>\n      </button>\n      <button id="resetButton" class="launch blocklyLaunch" style="display: none">\n        <div>', escape((49,  msg.resetProgram() )), '</div>\n        <img src="', escape((50,  assetUrl('media/1x1.gif') )), '" class="reset26"/>\n      </button>\n      ');52; if (data.controls) { ; buf.push('\n      ', (53,  data.controls ), '\n      ');54; } ; buf.push('\n      ');55; if (data.extraControlRows) { ; buf.push('\n      ', (56,  data.extraControlRows ), '\n      ');57; } ; buf.push('\n    </div>\n\n    ');60; instructions() ; buf.push('\n    ');61; helpArea(data.helpHtml) ; buf.push('\n\n  </div>\n</div>\n\n');66; if (data.editCode) { ; buf.push('\n  <div id="codeWorkspace">\n');68; } else { ; buf.push('\n  <div id="blockly">\n');70; } ; buf.push('\n  <div id="headers" dir="', escape((71,  data.localeDirection )), '">\n    <div id="toolbox-header" class="blockly-header"><span>', escape((72,  msg.toolboxHeader() )), '</span></div>\n    <div id="workspace-header" class="blockly-header">\n      <span id="workspace-header-span">', escape((74,  msg.workspaceHeader())), ' </span>\n      <div id="blockCounter">\n        <div id="blockUsed" class=', escape((76,  data.blockCounterClass )), '>\n          ', escape((77,  data.blockUsed )), '\n        </div>\n        <span>&nbsp;/</span>\n        <span id="idealBlockNumber">', escape((80,  data.idealBlockNumber )), '</span>\n      </div>\n    </div>\n    <div id="show-code-header" class="blockly-header"><span>', escape((83,  msg.showCodeHeader() )), '</span></div>\n  </div>\n  ');85; if (data.editCode) { ; buf.push('\n    <div id="codeTextbox" contenteditable spellcheck=false></div>\n  ');87; } ; buf.push('\n</div>\n\n<div class="clear"></div>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());