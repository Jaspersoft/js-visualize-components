/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import _ from "underscore";
import classUtil from "./classUtil";
var ARGS_TYPE = {
  INDEX: "index",
  KEY_VALUE: "keyValue",
};
var DEFAILT_KEY_VALUE_SEPARATOR = ", ";
var i18nMessage = classUtil.extend({
  constructor: function (code) {
    this.code = code;
    this.args = Array.prototype.slice.call(arguments, 1);
  },
  bundle: {},
});
i18nMessage.prototype.toString = function () {
  var text = this.bundle[this.code];
  if (!text) {
    return this.code;
  }
  var argsType = this._getArgsType(this.args);
  if (argsType === ARGS_TYPE.INDEX) {
    text = this._interpolateIndexArgs(this.args, text);
  } else if (argsType === ARGS_TYPE.KEY_VALUE) {
    text = this._interpolateObjectArgs(this.args, text);
  }
  return text;
};
i18nMessage.prototype._getArgsType = function (args) {
  if (args && args.length) {
    var firstArg = _.first(args);
    return _.isObject(firstArg) ? ARGS_TYPE.KEY_VALUE : ARGS_TYPE.INDEX;
  }
};
i18nMessage.prototype._interpolateObjectArgs = function (args, text) {
  var separator = args[0].separator || DEFAILT_KEY_VALUE_SEPARATOR;
  var formattedArgs = args.reduce(function (memo, argument) {
    var key = argument.key,
      value = argument.value;
    if (memo[key]) {
      memo[key] = memo[key] + separator;
    } else {
      memo[key] = "";
    }
    memo[key] = memo[key] + value;
    return memo;
  }, {});
  text = _.keys(formattedArgs).reduce(function (memo, key) {
    var value = formattedArgs[key],
      regexp = "\\{" + key + "\\}";
    return memo.replace(new RegExp(regexp, "g"), value);
  }, text);
  return text;
};
i18nMessage.prototype._interpolateIndexArgs = function (args, text) {
  for (var i = 0, l = args.length; i < l; i++) {
    var parameter = args[i],
      regexp = "\\{" + i + "\\}";
    text = text.replace(new RegExp(regexp, "g"), parameter);
  }
  return text;
};
i18nMessage.create = function (bundle) {
  return function (code) {
    var message = Object.create(i18nMessage.prototype);
    message = _.extend(message, {
      bundle: bundle,
      code: code,
      args: Array.prototype.slice.call(arguments, 1),
    });
    return message.toString(message);
  };
};
export default i18nMessage;
