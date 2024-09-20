import _ from "underscore";

var classUtil = {
  mixin: function () {
    var arg,
      prop,
      arr = Array.prototype,
      to = arr.shift.call(arguments);
    for (arg = 0; arg < arguments.length; arg += 1) {
      if (!arguments[arg]) {
        continue;
      }
      for (prop in arguments[arg]) {
        if (arguments[arg].hasOwnProperty(prop)) {
          to[prop] = arguments[arg][prop];
        }
      }
    }
    return to;
  },
  inherit: function (parent, obj) {
    var Subclass;
    if (obj && obj.hasOwnProperty("constructor")) {
      Subclass = obj.constructor;
    } else {
      Subclass = function () {
        return parent.apply(this, arguments);
      };
    }
    var Chain = function () {};
    Chain.prototype = parent.prototype;
    Subclass.prototype = new Chain();
    if (obj) {
      _.extend(Subclass.prototype, obj);
    }
    Subclass.prototype.constructor = Subclass;
    Subclass.parent = parent.prototype;
    Subclass.extend = function (objToInherit) {
      return classUtil.inherit(Subclass, objToInherit);
    };
    return Subclass;
  },
  extend: function (obj) {
    return classUtil.inherit(function () {}, obj);
  },
};
export default classUtil;
