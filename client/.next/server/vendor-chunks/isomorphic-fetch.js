"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isomorphic-fetch";
exports.ids = ["vendor-chunks/isomorphic-fetch"];
exports.modules = {

/***/ "(ssr)/./node_modules/isomorphic-fetch/fetch-npm-node.js":
/*!*********************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-node.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar realFetch = __webpack_require__(/*! node-fetch */ \"(ssr)/./node_modules/node-fetch/lib/index.mjs\");\nmodule.exports = function(url, options) {\n    if (/^\\/\\//.test(url)) {\n        url = \"https:\" + url;\n    }\n    return realFetch.call(this, url, options);\n};\nif (!global.fetch) {\n    global.fetch = module.exports;\n    global.Response = realFetch.Response;\n    global.Headers = realFetch.Headers;\n    global.Request = realFetch.Request;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tbm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViLElBQUlBLFlBQVlDLG1CQUFPQSxDQUFDO0FBQ3hCQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsR0FBRyxFQUFFQyxPQUFPO0lBQ3JDLElBQUksUUFBUUMsSUFBSSxDQUFDRixNQUFNO1FBQ3RCQSxNQUFNLFdBQVdBO0lBQ2xCO0lBQ0EsT0FBT0osVUFBVU8sSUFBSSxDQUFDLElBQUksRUFBRUgsS0FBS0M7QUFDbEM7QUFFQSxJQUFJLENBQUNHLE9BQU9DLEtBQUssRUFBRTtJQUNsQkQsT0FBT0MsS0FBSyxHQUFHUCxPQUFPQyxPQUFPO0lBQzdCSyxPQUFPRSxRQUFRLEdBQUdWLFVBQVVVLFFBQVE7SUFDcENGLE9BQU9HLE9BQU8sR0FBR1gsVUFBVVcsT0FBTztJQUNsQ0gsT0FBT0ksT0FBTyxHQUFHWixVQUFVWSxPQUFPO0FBQ25DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcmtuZXQtdGVtcGxhdGUtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzPzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByZWFsRmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuXHRpZiAoL15cXC9cXC8vLnRlc3QodXJsKSkge1xuXHRcdHVybCA9ICdodHRwczonICsgdXJsO1xuXHR9XG5cdHJldHVybiByZWFsRmV0Y2guY2FsbCh0aGlzLCB1cmwsIG9wdGlvbnMpO1xufTtcblxuaWYgKCFnbG9iYWwuZmV0Y2gpIHtcblx0Z2xvYmFsLmZldGNoID0gbW9kdWxlLmV4cG9ydHM7XG5cdGdsb2JhbC5SZXNwb25zZSA9IHJlYWxGZXRjaC5SZXNwb25zZTtcblx0Z2xvYmFsLkhlYWRlcnMgPSByZWFsRmV0Y2guSGVhZGVycztcblx0Z2xvYmFsLlJlcXVlc3QgPSByZWFsRmV0Y2guUmVxdWVzdDtcbn1cbiJdLCJuYW1lcyI6WyJyZWFsRmV0Y2giLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVybCIsIm9wdGlvbnMiLCJ0ZXN0IiwiY2FsbCIsImdsb2JhbCIsImZldGNoIiwiUmVzcG9uc2UiLCJIZWFkZXJzIiwiUmVxdWVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/isomorphic-fetch/fetch-npm-node.js\n");

/***/ })

};
;