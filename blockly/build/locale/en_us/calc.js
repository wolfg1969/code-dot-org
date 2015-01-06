var MessageFormat = require("messageformat");MessageFormat.locale.en=function(n){return n===1?"one":"other"}
exports.compute = function(d){return "compute"};

exports.equivalentExpression = function(d){return "Try reordering your arguments to get exactly the same expression."};

exports.extraTopBlocks = function(d){return "You have unattached blocks. Did you mean to attach these to the \"compute\" block?"};

exports.goal = function(d){return "Goal:"};

exports.reinfFeedbackMsg = function(d){return "Here is your story! Continue working on it, or move on to the next puzzle!"};

exports.yourExpression = function(d){return "Your expression:"};

