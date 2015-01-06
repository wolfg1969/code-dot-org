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

var msg = require('../../../locale/current/common');

/**
 * Add the procedures category to the toolbox.
 */
var addProcedures = function() {; buf.push('  <category name="', escape((8,  msg.catProcedures() )), '" custom="PROCEDURE"></category>\n  <category name="', escape((9,  msg.catLogic() )), '">\n    <block type="karel_if"></block>\n    <block type="karel_ifElse"></block>\n  </category>\n');13; };; buf.push('\n');14;
/**
 * Options:
 * @param doStatement An optional statement for the do statement in the loop.
 * @param upperLimit The upper limit of the for loop.
 */
var controlsFor = function(doStatement, upperLimit) {; buf.push('  <block type="controls_for">\n    <value name="FROM">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    <value name="TO">\n      <block type="math_number">\n        <title name="NUM">\n          ', escape((29,  upperLimit || 10)), '        </title>\n      </block>\n    </value>\n    <value name="BY">\n      <block type="math_number">\n        <title name="NUM">1</title>\n      </block>\n    </value>\n    ');37; if (doStatement) {; buf.push('      <statement name="DO">\n        ');38; doStatement() ; buf.push('\n      </statement>\n    ');40; }; buf.push('  </block>\n');41; };; buf.push('\n<xml id="toolbox" style="display: none;">\n  <category name="', escape((43,  msg.catActions() )), '">\n    <block type="maze_moveForward"></block>\n    <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n    <block type="maze_turn"><title name="DIR">turnRight</title></block>\n    <block type="maze_dig"></block>\n    <block type="maze_fill"></block>\n  </category>\n  ');50; addProcedures(); buf.push('  <category name="', escape((50,  msg.catLoops() )), '">\n    <block type="maze_untilBlockedOrNotClear"></block>\n    ');52; if (level < 9) {; buf.push('      <block type="controls_repeat"></block>\n    ');53; } else {; buf.push('      <block type="controls_repeat_ext">\n        <value name="TIMES">\n          <block type="math_number">\n            <title name="NUM">10</title>\n          </block>\n        </value>\n      </block>\n    ');60; }; buf.push('    ');60; controlsFor(); buf.push('  </category>\n  <category name="', escape((61,  msg.catMath() )), '">\n    <block type="math_number"></block>\n  </category>\n  <category name="', escape((64,  msg.catVariables() )), '" custom="VARIABLE">\n  </category>\n</xml>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());