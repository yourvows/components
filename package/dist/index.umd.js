(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["agm-awesome-utils-tutorial"] = {}));
})(this, (function (exports) { 'use strict';

    var capitalize = function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    var validPhones = ['90', '91', '33', '50', '93', '94', '88', '95', '97', '98', '99', '77', '20'];
    var isUzPhone = function isUzPhone(val) {
      var phone = val.replace(/[\s)(-]/g, '');
      return phone.length === 9 && validPhones.includes(phone.substring(0, 2));
    };

    exports.capitalize = capitalize;
    exports.isUzPhone = isUzPhone;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
