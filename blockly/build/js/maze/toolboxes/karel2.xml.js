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

var commonMsg = require('../../../locale/current/common');
var mazeMsg = require('../../../locale/current/maze');

var addProcedures = function() {; buf.push('  ');6; if (level > 3) {; buf.push('    <category name="', escape((6,  commonMsg.catProcedures() )), '" custom="PROCEDURE"></category>\n  ');7; } else if (level == 2 || level == 3) {; buf.push('    <category name="', escape((7,  commonMsg.catProcedures() )), '">\n      <block type="procedures_callnoreturn">\n        <mutation name="', escape((9,  mazeMsg.fillN({shovelfuls: 5}) )), '"></mutation>\n      </block>\n    </category>\n  ');12; }; buf.push('  ');12; if (level < 9) {; buf.push('    <category name="', escape((12,  commonMsg.catLogic() )), '">\n      <block type="karel_if"></block>\n    </category>\n  ');15; } else if (level > 8) {; buf.push('    <category name="', escape((15,  commonMsg.catLogic() )), '">\n      <block type="karel_if"></block>\n      <block type="karel_ifElse"></block>\n    </category>\n  ');19; }; buf.push('');19; };; buf.push('\n<xml id="toolbox" style="display: none;">\n  <category name="', escape((21,  commonMsg.catActions() )), '">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  ');28; addProcedures(); buf.push('  <category name="', escape((28,  commonMsg.catLoops() )), '">\n    <block type="maze_untilBlocked"></block>\n    <block type="controls_repeat"></block>\n  </category>\n</xml>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());