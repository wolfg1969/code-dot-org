var MessageFormat = require("messageformat");MessageFormat.locale.en=function(n){return n===1?"one":"other"}
exports.circleBlockTitle = function(d){return "circle (radius, style, color)"};

exports.displayBlockTitle = function(d){return "display"};

exports.ellipseBlockTitle = function(d){return "ellipse (width, height, style, color)"};

exports.extraTopBlocks = function(d){return "You have unattached blocks. Did you mean to attach these to the \"display\" block?"};

exports.overlayBlockTitle = function(d){return "overlay (top, bottom)"};

exports.placeImageBlockTitle = function(d){return "place-image (x, y, image)"};

exports.offsetBlockTitle = function(d){return "offset (x, y, image)"};

exports.rectangleBlockTitle = function(d){return "rectangle (width, height, style, color)"};

exports.reinfFeedbackMsg = function(d){return "You can press the \"Try again\" button to edit your drawing."};

exports.rotateImageBlockTitle = function(d){return "rotate (degrees, image)"};

exports.scaleImageBlockTitle = function(d){return "scale (factor)"};

exports.squareBlockTitle = function(d){return "square (size, style, color)"};

exports.starBlockTitle = function(d){return "star (radius, style, color)"};

exports.radialStarBlockTitle = function(d){return "radial-star (points, inner, outer, style, color)"};

exports.polygonBlockTitle = function(d){return "polygon (sides, length, style, color)"};

exports.stringAppendBlockTitle = function(d){return "string-append (first, second)"};

exports.stringLengthBlockTitle = function(d){return "string-length (string)"};

exports.textBlockTitle = function(d){return "text (string, size, color)"};

exports.triangleBlockTitle = function(d){return "triangle (size, style, color)"};

exports.underlayBlockTitle = function(d){return "underlay (bottom, top)"};

exports.outline = function(d){return "outline"};

exports.solid = function(d){return "solid"};

exports.string = function(d){return "string"};

