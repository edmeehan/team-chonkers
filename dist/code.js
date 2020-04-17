function doGet() {
}
function getGroups() {
}!function(e, a) {
    for (var i in a) e[i] = a[i];
}(this, function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 2);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function doGet(e) {
        var template = e && e.parameter && e.parameter.page ? HtmlService.createTemplateFromFile(e.parameter.page) : HtmlService.createTemplateFromFile("Index");
        return template.data = [], template.evaluate();
    }
    __webpack_require__.d(__webpack_exports__, "a", (function() {
        return doGet;
    }));
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var config_spreadsheets = {
        members: "Members",
        groups: "Groups"
    };
    function _slicedToArray(arr, i) {
        return function(arr) {
            if (Array.isArray(arr)) return arr;
        }(arr) || function(arr, i) {
            if (!(Symbol.iterator in Object(arr) || "[object Arguments]" === Object.prototype.toString.call(arr))) return;
            var _arr = [], _n = !0, _d = !1, _e = undefined;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    _n || null == _i["return"] || _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }(arr, i) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    var Group = function Group(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], id = _ref2[1];
        !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, Group), this.name = name, this.id = id;
    };
    __webpack_require__.d(__webpack_exports__, "a", (function() {
        return app_getGroups;
    }));
    var app_getGroups = function() {
        var rows = function(sheetName) {
            var getValues = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1], spreadSheet = SpreadsheetApp.getActiveSpreadsheet(), sheet = spreadSheet.getSheetByName(sheetName);
            return getValues ? sheet.getDataRange().getValues() : sheet;
        }(config_spreadsheets.groups);
        return rows.shift(), rows.map((function(item) {
            return new Group(item);
        }));
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0), _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        global.doGet = _app_routes__WEBPACK_IMPORTED_MODULE_0__["a"], global.getGroups = _app__WEBPACK_IMPORTED_MODULE_1__["a"];
    }.call(this, __webpack_require__(3));
}, function(module, exports) {
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (g = window);
    }
    module.exports = g;
} ]));