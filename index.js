'use strict';
var Class = function(properties) {
//  method 1
//    var ctor = properties.initialize || function() {};

//  method 2
    var ctor = function() {
        if (properties.hasOwnProperty('initialize'))
            properties.initialize.apply(this, arguments);
    }

    for (var key in properties) {
        if (typeof properties[key] == 'function') {
            if (key == 'initialize') {
                continue;
            }

            ctor.prototype[key] = properties[key];
        }
    }

    return ctor;
}

module.exports = Class;
