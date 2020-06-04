function doGet() {
}
function getChonkers() {
}
function updateChonker() {
}
function getJournals() {
}
function createJournal() {
}
function getUser() {
}/*! For license information please see code.js.LICENSE.txt */
!function(e, a) {
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
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "c", (function() {
        return initProperties;
    })), __webpack_require__.d(__webpack_exports__, "b", (function() {
        return getUserProperties;
    })), __webpack_require__.d(__webpack_exports__, "d", (function() {
        return setScriptProperty;
    })), __webpack_require__.d(__webpack_exports__, "a", (function() {
        return getScriptProperty;
    }));
    var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1), md5__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__), userProperties = PropertiesService.getUserProperties(), scriptProperties = PropertiesService.getScriptProperties(), userEmail = Session.getActiveUser().getEmail();
    function initProperties() {
        var people = People.People.getBatchGet({
            resourceNames: [ "people/me" ],
            personFields: "names,photos"
        });
        scriptProperties.getProperty("chonkers") || scriptProperties.setProperty("chonkers", "{}");
        var user = JSON.parse(scriptProperties.getProperty("chonkers"));
        user[md5__WEBPACK_IMPORTED_MODULE_0___default()(userEmail)] || (user[md5__WEBPACK_IMPORTED_MODULE_0___default()(userEmail)] = {
            displayName: people.responses[0].person.names[0].displayName,
            photoUrl: people.responses[0].person.photos[0].url,
            share: !1
        }, scriptProperties.setProperty("chonkers", JSON.stringify(user))), userProperties.setProperties({
            id: md5__WEBPACK_IMPORTED_MODULE_0___default()(userEmail),
            displayName: people.responses[0].person.names[0].displayName,
            givenName: people.responses[0].person.names[0].givenName,
            familyName: people.responses[0].person.names[0].familyName,
            photoUrl: people.responses[0].person.photos[0].url
        });
    }
    function getUserProperties() {
        return userProperties.getProperties();
    }
    function setScriptProperty(key, value) {
        return scriptProperties.setProperty(key, value), !0;
    }
    function getScriptProperty(key) {
        return scriptProperties.getProperty(key);
    }
}, function(module, exports, __webpack_require__) {
    var crypt, utf8, isBuffer, bin, md5;
    crypt = __webpack_require__(7), utf8 = __webpack_require__(3).utf8, isBuffer = __webpack_require__(8), 
    bin = __webpack_require__(3).bin, (md5 = function(message, options) {
        message.constructor == String ? message = options && "binary" === options.encoding ? bin.stringToBytes(message) : utf8.stringToBytes(message) : isBuffer(message) ? message = Array.prototype.slice.call(message, 0) : Array.isArray(message) || (message = message.toString());
        for (var m = crypt.bytesToWords(message), l = 8 * message.length, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < m.length; i++) m[i] = 16711935 & (m[i] << 8 | m[i] >>> 24) | 4278255360 & (m[i] << 24 | m[i] >>> 8);
        m[l >>> 5] |= 128 << l % 32, m[14 + (l + 64 >>> 9 << 4)] = l;
        var FF = md5._ff, GG = md5._gg, HH = md5._hh, II = md5._ii;
        for (i = 0; i < m.length; i += 16) {
            var aa = a, bb = b, cc = c, dd = d;
            a = FF(a, b, c, d, m[i + 0], 7, -680876936), d = FF(d, a, b, c, m[i + 1], 12, -389564586), 
            c = FF(c, d, a, b, m[i + 2], 17, 606105819), b = FF(b, c, d, a, m[i + 3], 22, -1044525330), 
            a = FF(a, b, c, d, m[i + 4], 7, -176418897), d = FF(d, a, b, c, m[i + 5], 12, 1200080426), 
            c = FF(c, d, a, b, m[i + 6], 17, -1473231341), b = FF(b, c, d, a, m[i + 7], 22, -45705983), 
            a = FF(a, b, c, d, m[i + 8], 7, 1770035416), d = FF(d, a, b, c, m[i + 9], 12, -1958414417), 
            c = FF(c, d, a, b, m[i + 10], 17, -42063), b = FF(b, c, d, a, m[i + 11], 22, -1990404162), 
            a = FF(a, b, c, d, m[i + 12], 7, 1804603682), d = FF(d, a, b, c, m[i + 13], 12, -40341101), 
            c = FF(c, d, a, b, m[i + 14], 17, -1502002290), a = GG(a, b = FF(b, c, d, a, m[i + 15], 22, 1236535329), c, d, m[i + 1], 5, -165796510), 
            d = GG(d, a, b, c, m[i + 6], 9, -1069501632), c = GG(c, d, a, b, m[i + 11], 14, 643717713), 
            b = GG(b, c, d, a, m[i + 0], 20, -373897302), a = GG(a, b, c, d, m[i + 5], 5, -701558691), 
            d = GG(d, a, b, c, m[i + 10], 9, 38016083), c = GG(c, d, a, b, m[i + 15], 14, -660478335), 
            b = GG(b, c, d, a, m[i + 4], 20, -405537848), a = GG(a, b, c, d, m[i + 9], 5, 568446438), 
            d = GG(d, a, b, c, m[i + 14], 9, -1019803690), c = GG(c, d, a, b, m[i + 3], 14, -187363961), 
            b = GG(b, c, d, a, m[i + 8], 20, 1163531501), a = GG(a, b, c, d, m[i + 13], 5, -1444681467), 
            d = GG(d, a, b, c, m[i + 2], 9, -51403784), c = GG(c, d, a, b, m[i + 7], 14, 1735328473), 
            a = HH(a, b = GG(b, c, d, a, m[i + 12], 20, -1926607734), c, d, m[i + 5], 4, -378558), 
            d = HH(d, a, b, c, m[i + 8], 11, -2022574463), c = HH(c, d, a, b, m[i + 11], 16, 1839030562), 
            b = HH(b, c, d, a, m[i + 14], 23, -35309556), a = HH(a, b, c, d, m[i + 1], 4, -1530992060), 
            d = HH(d, a, b, c, m[i + 4], 11, 1272893353), c = HH(c, d, a, b, m[i + 7], 16, -155497632), 
            b = HH(b, c, d, a, m[i + 10], 23, -1094730640), a = HH(a, b, c, d, m[i + 13], 4, 681279174), 
            d = HH(d, a, b, c, m[i + 0], 11, -358537222), c = HH(c, d, a, b, m[i + 3], 16, -722521979), 
            b = HH(b, c, d, a, m[i + 6], 23, 76029189), a = HH(a, b, c, d, m[i + 9], 4, -640364487), 
            d = HH(d, a, b, c, m[i + 12], 11, -421815835), c = HH(c, d, a, b, m[i + 15], 16, 530742520), 
            a = II(a, b = HH(b, c, d, a, m[i + 2], 23, -995338651), c, d, m[i + 0], 6, -198630844), 
            d = II(d, a, b, c, m[i + 7], 10, 1126891415), c = II(c, d, a, b, m[i + 14], 15, -1416354905), 
            b = II(b, c, d, a, m[i + 5], 21, -57434055), a = II(a, b, c, d, m[i + 12], 6, 1700485571), 
            d = II(d, a, b, c, m[i + 3], 10, -1894986606), c = II(c, d, a, b, m[i + 10], 15, -1051523), 
            b = II(b, c, d, a, m[i + 1], 21, -2054922799), a = II(a, b, c, d, m[i + 8], 6, 1873313359), 
            d = II(d, a, b, c, m[i + 15], 10, -30611744), c = II(c, d, a, b, m[i + 6], 15, -1560198380), 
            b = II(b, c, d, a, m[i + 13], 21, 1309151649), a = II(a, b, c, d, m[i + 4], 6, -145523070), 
            d = II(d, a, b, c, m[i + 11], 10, -1120210379), c = II(c, d, a, b, m[i + 2], 15, 718787259), 
            b = II(b, c, d, a, m[i + 9], 21, -343485551), a = a + aa >>> 0, b = b + bb >>> 0, 
            c = c + cc >>> 0, d = d + dd >>> 0;
        }
        return crypt.endian([ a, b, c, d ]);
    })._ff = function(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    }, md5._gg = function(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    }, md5._hh = function(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    }, md5._ii = function(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
        return (n << s | n >>> 32 - s) + b;
    }, md5._blocksize = 16, md5._digestsize = 16, module.exports = function(message, options) {
        if (message === undefined || null === message) throw new Error("Illegal argument " + message);
        var digestbytes = crypt.wordsToBytes(md5(message, options));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", (function() {
        return getChonkers;
    })), __webpack_require__.d(__webpack_exports__, "e", (function() {
        return updateChonker;
    })), __webpack_require__.d(__webpack_exports__, "c", (function() {
        return getJournals;
    })), __webpack_require__.d(__webpack_exports__, "a", (function() {
        return createJournal;
    })), __webpack_require__.d(__webpack_exports__, "d", (function() {
        return getUser;
    }));
    var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1), md5__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__), _property_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0), getEmail = function() {
        return Session.getActiveUser().getEmail();
    };
    function serialize(value) {
        return JSON.parse(JSON.stringify(value));
    }
    function getSheet(sheetName) {
        var getValues = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1], spreadSheet = SpreadsheetApp.getActiveSpreadsheet(), sheet = spreadSheet.getSheetByName(sheetName);
        return getValues ? sheet.getDataRange().getValues() : sheet;
    }
    function getChonkers() {
        var chonkers = Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["a"])("chonkers");
        return JSON.parse(chonkers);
    }
    function updateChonker(id, data) {
        var chonkers = JSON.parse(Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["a"])("chonkers"));
        return chonkers[id] = data, Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["d"])("chonkers", JSON.stringify(chonkers)), 
        chonkers;
    }
    function getJournals() {
        var rows = getSheet(Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["a"])("sheet_journals"));
        return rows.shift(), serialize(rows);
    }
    function createJournal(_ref) {
        var weight = _ref.weight, lBicep = _ref.lBicep, rBicep = _ref.rBicep, waist = _ref.waist, hips = _ref.hips, lThigh = _ref.lThigh, rThigh = _ref.rThigh, chest = _ref.chest, caliperMeasurment = _ref.caliperMeasurment, bodyFat = _ref.bodyFat, progress = _ref.progress;
        return getSheet(Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["a"])("sheet_journals"), !1).appendRow([ md5__WEBPACK_IMPORTED_MODULE_0___default()(getEmail), new Date, weight, lBicep, rBicep, waist, hips, lThigh, rThigh, chest, caliperMeasurment, bodyFat, progress ]).getIndex();
    }
    function getUser() {
        return serialize(Object(_property_service__WEBPACK_IMPORTED_MODULE_1__["b"])());
    }
}, function(module, exports) {
    var charenc = {
        utf8: {
            stringToBytes: function(str) {
                return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
            },
            bytesToString: function(bytes) {
                return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
            }
        },
        bin: {
            stringToBytes: function(str) {
                for (var bytes = [], i = 0; i < str.length; i++) bytes.push(255 & str.charCodeAt(i));
                return bytes;
            },
            bytesToString: function(bytes) {
                for (var str = [], i = 0; i < bytes.length; i++) str.push(String.fromCharCode(bytes[i]));
                return str.join("");
            }
        }
    };
    module.exports = charenc;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", (function() {
        return doGet;
    }));
    var _property_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
    function doGet(e) {
        var template = e && e.parameter && e.parameter.page ? HtmlService.createTemplateFromFile(e.parameter.page) : HtmlService.createTemplateFromFile("Index");
        return template.data = [], Object(_property_service__WEBPACK_IMPORTED_MODULE_0__["c"])(), 
        template.evaluate();
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__), function(global) {
        var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4), _app_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        global.doGet = _app_routes__WEBPACK_IMPORTED_MODULE_0__["a"], global.getChonkers = _app_methods__WEBPACK_IMPORTED_MODULE_1__["b"], 
        global.updateChonker = _app_methods__WEBPACK_IMPORTED_MODULE_1__["e"], global.getJournals = _app_methods__WEBPACK_IMPORTED_MODULE_1__["c"], 
        global.createJournal = _app_methods__WEBPACK_IMPORTED_MODULE_1__["a"], global.getUser = _app_methods__WEBPACK_IMPORTED_MODULE_1__["d"];
    }.call(this, __webpack_require__(6));
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
}, function(module, exports) {
    var base64map, crypt;
    base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", 
    crypt = {
        rotl: function(n, b) {
            return n << b | n >>> 32 - b;
        },
        rotr: function(n, b) {
            return n << 32 - b | n >>> b;
        },
        endian: function(n) {
            if (n.constructor == Number) return 16711935 & crypt.rotl(n, 8) | 4278255360 & crypt.rotl(n, 24);
            for (var i = 0; i < n.length; i++) n[i] = crypt.endian(n[i]);
            return n;
        },
        randomBytes: function(n) {
            for (var bytes = []; n > 0; n--) bytes.push(Math.floor(256 * Math.random()));
            return bytes;
        },
        bytesToWords: function(bytes) {
            for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) words[b >>> 5] |= bytes[i] << 24 - b % 32;
            return words;
        },
        wordsToBytes: function(words) {
            for (var bytes = [], b = 0; b < 32 * words.length; b += 8) bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
            return bytes;
        },
        bytesToHex: function(bytes) {
            for (var hex = [], i = 0; i < bytes.length; i++) hex.push((bytes[i] >>> 4).toString(16)), 
            hex.push((15 & bytes[i]).toString(16));
            return hex.join("");
        },
        hexToBytes: function(hex) {
            for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16));
            return bytes;
        },
        bytesToBase64: function(bytes) {
            for (var base64 = [], i = 0; i < bytes.length; i += 3) for (var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2], j = 0; j < 4; j++) 8 * i + 6 * j <= 8 * bytes.length ? base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63)) : base64.push("=");
            return base64.join("");
        },
        base64ToBytes: function(base64) {
            base64 = base64.replace(/[^A-Z0-9+\/]/gi, "");
            for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) 0 != imod4 && bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << 2 * imod4 | base64map.indexOf(base64.charAt(i)) >>> 6 - 2 * imod4);
            return bytes;
        }
    }, module.exports = crypt;
}, function(module, exports) {
    function isBuffer(obj) {
        return !!obj.constructor && "function" == typeof obj.constructor.isBuffer && obj.constructor.isBuffer(obj);
    }
    module.exports = function(obj) {
        return null != obj && (isBuffer(obj) || function(obj) {
            return "function" == typeof obj.readFloatLE && "function" == typeof obj.slice && isBuffer(obj.slice(0, 0));
        }(obj) || !!obj._isBuffer);
    };
} ]));