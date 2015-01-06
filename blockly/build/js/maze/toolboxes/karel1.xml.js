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
 buf.push('<xml id="toolbox" style="display: none;">\n  <block type="maze_moveForward"></block>\n  <block type="maze_turn"><title name="DIR">turnLeft</title></block>\n  <block type="maze_turn"><title name="DIR">turnRight</title></block>\n  <block type="maze_dig"></block>\n  ');6; if (level > 1) {; buf.push('    <block type="maze_fill"></block>\n    ');7; if (level > 2) {; buf.push('      <block type="controls_repeat">\n        <title name="TIMES">5</title>\n      </block>\n      ');10; if (level > 9) {; buf.push('        <block type="karel_if"></block>\n      ');11; }; buf.push('    ');11; }; buf.push('    ');11; if (level == 5 || level == 10 || level == 11) {; buf.push('      <block type="maze_untilBlocked"></block>\n    ');12; }; buf.push('    ');12; if (level > 5 && level < 8) {; buf.push('      <block type="maze_untilBlockedOrNotClear"></block>\n    ');13; }; buf.push('    ');13; if (level == 8 || level == 9) {; buf.push('      <block type="maze_untilBlockedOrNotClear">\n        <title name="DIR">isPathForward</title>\n      </block>\n    ');16; }; buf.push('  ');16; }; buf.push('</xml>\n'); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());