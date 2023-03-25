"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/data";
exports.ids = ["pages/api/data"];
exports.modules = {

/***/ "(api)/./pages/api/data.js":
/*!***************************!*\
  !*** ./pages/api/data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// an simple endpoint for getting current list\nlet list = [\n    \"Item 1\",\n    \"Item 2\",\n    \"Item 3\"\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.query.add) {\n        if (!list.includes(req.query.add)) {\n            list.push(req.query.add);\n        }\n    } else if (req.query.clear) {\n        list = [];\n    }\n    await new Promise((r)=>setTimeout(r, 100));\n    res.json(list);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsOENBQThDO0FBQzlDLElBQUlBLElBQUksR0FBRztJQUFDLFFBQVE7SUFBRSxRQUFRO0lBQUUsUUFBUTtDQUFDO0FBRXpDLGlFQUFlLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLElBQUlELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDQyxHQUFHLEVBQUU7UUFDakIsSUFBSSxDQUFDSixJQUFJLENBQUNLLFFBQVEsQ0FBQ0osR0FBRyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDSixJQUFJLENBQUNNLElBQUksQ0FBQ0wsR0FBRyxDQUFDRSxLQUFLLENBQUNDLEdBQUcsQ0FBQztTQUN6QjtLQUNGLE1BQU0sSUFBSUgsR0FBRyxDQUFDRSxLQUFLLENBQUNJLEtBQUssRUFBRTtRQUMxQlAsSUFBSSxHQUFHLEVBQUU7S0FDVjtJQUVELE1BQU0sSUFBSVEsT0FBTyxDQUFDQyxDQUFBQSxDQUFDLEdBQUlDLFVBQVUsQ0FBQ0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTFDUCxHQUFHLENBQUNTLElBQUksQ0FBQ1gsSUFBSSxDQUFDO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AdGFuc3RhY2svcXVlcnktZXhhbXBsZS1yZWFjdC1yZWZldGNoLWludGVydmFsLy4vcGFnZXMvYXBpL2RhdGEuanM/NjdkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbiBzaW1wbGUgZW5kcG9pbnQgZm9yIGdldHRpbmcgY3VycmVudCBsaXN0XG5sZXQgbGlzdCA9IFsnSXRlbSAxJywgJ0l0ZW0gMicsICdJdGVtIDMnXVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5xdWVyeS5hZGQpIHtcbiAgICBpZiAoIWxpc3QuaW5jbHVkZXMocmVxLnF1ZXJ5LmFkZCkpIHtcbiAgICAgIGxpc3QucHVzaChyZXEucXVlcnkuYWRkKVxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXEucXVlcnkuY2xlYXIpIHtcbiAgICBsaXN0ID0gW11cbiAgfVxuXG4gIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDApKVxuXG4gIHJlcy5qc29uKGxpc3QpXG59XG4iXSwibmFtZXMiOlsibGlzdCIsInJlcSIsInJlcyIsInF1ZXJ5IiwiYWRkIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2xlYXIiLCJQcm9taXNlIiwiciIsInNldFRpbWVvdXQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/data.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/data.js"));
module.exports = __webpack_exports__;

})();