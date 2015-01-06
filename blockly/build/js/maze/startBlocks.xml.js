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
 buf.push('');1; if (page == 2) {; buf.push('  ');1; if (level < 4) {; buf.push('    <block type="maze_moveForward" x="70" y="70"></block>\n  ');2; } else if (level == 8) {; buf.push('    <block type="controls_repeat" x="70" y="70" editable="false"\n      deletable="false">\n      <title name="TIMES">3</title>\n    </block>\n  ');6; } else if (level == 13) {; buf.push('    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_moveForward" editable="false" deletable="false">\n          <next>\n            <block type="maze_if" editable="false" deletable="false">\n              <title name="DIR">isPathLeft</title>\n            </block>\n          </next>\n        </block>\n      </statement>\n    </block>\n  ');17; } else if (level == 19) {; buf.push('    <block type="maze_forever" x="20" y="70" editable="false" deletable="false">\n      <statement name="DO">\n        <block type="maze_ifElse" editable="false" deletable="false">\n          <title name="DIR">isPathForward</title>\n          <statement name="ELSE">\n            <block type="maze_ifElse" editable="false" deletable="false">\n              <title name="DIR">isPathRight</title>\n            </block>\n          </statement>\n        </block>\n      </statement>\n    </block>\n  ');29; }; buf.push('');29; }; buf.push(''); })();
} 
return buf.join('');
};
  return function(locals) {
    return t(locals, require("ejs").filters);
  }
}());