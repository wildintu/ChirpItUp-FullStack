/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar posts_1 = __webpack_require__(/*! ./posts */ \"./src/server/db/posts.ts\");\nexports.Connection = mysql.createConnection({\n    host: 'localhost',\n    port: 3306,\n    user: 'poster',\n    password: 'blah',\n    database: 'chirptable'\n});\nexports.Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            return resolve(results);\n        });\n    });\n};\nexports.default = {\n    posts: posts_1.default\n};\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/posts.ts":
/*!********************************!*\
  !*** ./src/server/db/posts.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar all = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('SELECT * FROM posts')];\n}); }); };\nvar one = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('SELECT * FROM posts WHERE id = ?', [id])];\n}); }); };\nvar post = function (user, text) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query(\"INSERT INTO posts(user, text) VALUES('\" + user + \"', '\" + text + \"')\")];\n}); }); };\nvar put = function (id, user, text) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query(\"UPDATE posts SET user='\" + user + \"', text='\" + text + \"' WHERE id =?\", [id])];\n}); }); };\nvar del = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, index_1.Query('DELETE FROM posts WHERE id =?', [id])];\n}); }); };\nexports.default = {\n    all: all,\n    one: one,\n    post: post,\n    put: put,\n    del: del\n};\n\n\n//# sourceURL=webpack:///./src/server/db/posts.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ./db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nrouter.get('/api/hello', function (req, res, next) {\n    res.json('World');\n});\nrouter.get('/api/posts/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, _a, _b, err_1, _c, _d, err_2;\n    return __generator(this, function (_e) {\n        switch (_e.label) {\n            case 0:\n                id = req.params.id;\n                if (!id) return [3 /*break*/, 5];\n                _e.label = 1;\n            case 1:\n                _e.trys.push([1, 3, , 4]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.posts.one(id)];\n            case 2:\n                _b.apply(_a, [(_e.sent())[0]]);\n                return [3 /*break*/, 4];\n            case 3:\n                err_1 = _e.sent();\n                if (err_1)\n                    throw err_1;\n                res.sendStatus(500);\n                return [3 /*break*/, 4];\n            case 4: return [3 /*break*/, 8];\n            case 5:\n                _e.trys.push([5, 7, , 8]);\n                _d = (_c = res).json;\n                return [4 /*yield*/, db_1.default.posts.all()];\n            case 6:\n                _d.apply(_c, [_e.sent()]);\n                return [3 /*break*/, 8];\n            case 7:\n                err_2 = _e.sent();\n                console.log(err_2);\n                res.sendStatus(500);\n                return [3 /*break*/, 8];\n            case 8: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post('/api/posts', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, text, _a, _b, err_3;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                user = req.body.user;\n                text = req.body.text;\n                _c.label = 1;\n            case 1:\n                _c.trys.push([1, 3, , 4]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.posts.post(user, text)];\n            case 2:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 4];\n            case 3:\n                err_3 = _c.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put('/api/posts/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, text, id, _a, _b, err_4;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                user = req.body.user;\n                text = req.body.text;\n                id = req.params.id;\n                _c.label = 1;\n            case 1:\n                _c.trys.push([1, 3, , 4]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.posts.put(id, user, text)];\n            case 2:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 4];\n            case 3:\n                err_4 = _c.sent();\n                console.log(err_4);\n                res.sendStatus(500);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete('/api/posts/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, _a, _b, err_5;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                id = req.params.id;\n                if (!id) return [3 /*break*/, 4];\n                _c.label = 1;\n            case 1:\n                _c.trys.push([1, 3, , 4]);\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.posts.del(id)];\n            case 2:\n                _b.apply(_a, [(_c.sent())[0]]);\n                return [3 /*break*/, 4];\n            case 3:\n                err_5 = _c.sent();\n                if (err_5)\n                    throw err_5;\n                res.sendStatus(500);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express();\napp.use(cors());\napp.use(express.json());\napp.use(express.static('public'));\napp.use(routes_1.default);\napp.get([\"/\", \"/Forms\", \"/Posts/:id/admin\"], function (req, res) { return res.sendFile(path.join(__dirname, '../public', 'index.html')); });\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });