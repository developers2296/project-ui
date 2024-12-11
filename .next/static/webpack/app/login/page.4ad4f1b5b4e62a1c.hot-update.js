"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./app/utils/api.js":
/*!**************************!*\
  !*** ./app/utils/api.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: function() { return /* binding */ BASE_URL; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   storeCarDetails: function() { return /* binding */ storeCarDetails; }\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3004/api\";\nconst loginUser = async (credentials)=>{\n    try {\n        const response = await fetch(\"http://localhost:3004/api/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email: credentials.email,\n                password: credentials.password\n            })\n        });\n        if (!response.ok) {\n            const errorData = await response.json();\n            throw new Error(errorData.message || \"Login failed.\");\n        }\n        const data = await response.json();\n        return data; // Expected { token: \"JWT_TOKEN\" }\n    } catch (error) {\n        console.error(error);\n        throw error;\n    }\n};\nasync function storeCarDetails(carDetails, images) {\n    const formData = new FormData();\n    formData.append(\"model\", carDetails.model);\n    formData.append(\"price\", carDetails.price);\n    formData.append(\"phone\", carDetails.phone);\n    formData.append(\"city\", carDetails.city);\n    images.forEach((image)=>{\n        formData.append(\"attachments\", image);\n    });\n    const token = localStorage.getItem(\"authToken\");\n    if (!token) {\n        throw new Error(\"You must log in first\");\n    }\n    const response = await fetch(\"\".concat(BASE_URL, \"/car/add\"), {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \".concat(token)\n        },\n        body: formData\n    });\n    // if (!response.ok) {\n    //     console.log(response.message);\n    //     throw new Error(\"Failed to store car details\");\n    // }\n    return await response.json();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsV0FBVyw0QkFBNEI7QUFFN0MsTUFBTUMsWUFBWSxPQUFPQztJQUM1QixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUF3QztZQUNqRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsT0FBT1IsWUFBWVEsS0FBSztnQkFDeEJDLFVBQVVULFlBQVlTLFFBQVE7WUFDbEM7UUFDSjtRQUVBLElBQUksQ0FBQ1IsU0FBU1MsRUFBRSxFQUFFO1lBQ2QsTUFBTUMsWUFBWSxNQUFNVixTQUFTVyxJQUFJO1lBQ3JDLE1BQU0sSUFBSUMsTUFBTUYsVUFBVUcsT0FBTyxJQUFJO1FBQ3pDO1FBRUEsTUFBTUMsT0FBTyxNQUFNZCxTQUFTVyxJQUFJO1FBQ2hDLE9BQU9HLE1BQU0sa0NBQWtDO0lBQ25ELEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsTUFBTUE7SUFDVjtBQUNKLEVBQUU7QUFFSyxlQUFlRSxnQkFBZ0JDLFVBQVUsRUFBRUMsTUFBTTtJQUNwRCxNQUFNQyxXQUFXLElBQUlDO0lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU0osV0FBV0ssS0FBSztJQUN6Q0gsU0FBU0UsTUFBTSxDQUFDLFNBQVNKLFdBQVdNLEtBQUs7SUFDekNKLFNBQVNFLE1BQU0sQ0FBQyxTQUFTSixXQUFXTyxLQUFLO0lBQ3pDTCxTQUFTRSxNQUFNLENBQUMsUUFBUUosV0FBV1EsSUFBSTtJQUV2Q1AsT0FBT1EsT0FBTyxDQUFDLENBQUNDO1FBQ1pSLFNBQVNFLE1BQU0sQ0FBQyxlQUFlTTtJQUNuQztJQUNBLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUVuQyxJQUFJLENBQUNGLE9BQU87UUFDVixNQUFNLElBQUlqQixNQUFNO0lBQ2xCO0lBRUEsTUFBTVosV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVEosVUFBUyxhQUFXO1FBQ2hESyxRQUFRO1FBQ1JDLFNBQVM7WUFDTDZCLGVBQWUsVUFBZ0IsT0FBTkg7UUFDN0I7UUFDQXpCLE1BQU1nQjtJQUNWO0lBRUEsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUVyQyxzREFBc0Q7SUFDdEQsSUFBSTtJQUVKLE9BQU8sTUFBTXBCLFNBQVNXLElBQUk7QUFDOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2FwaS5qcz8yYTM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA0L2FwaVwiO1xuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKGNyZWRlbnRpYWxzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9hcGkvYXV0aC9sb2dpblwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCwgLy8gTWFrZSBzdXJlIHRvIHNlbmQgdGhlIGVtYWlsIGZpZWxkXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckRhdGEubWVzc2FnZSB8fCBcIkxvZ2luIGZhaWxlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YTsgLy8gRXhwZWN0ZWQgeyB0b2tlbjogXCJKV1RfVE9LRU5cIiB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9yZUNhckRldGFpbHMoY2FyRGV0YWlscywgaW1hZ2VzKSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJtb2RlbFwiLCBjYXJEZXRhaWxzLm1vZGVsKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcmljZVwiLCBjYXJEZXRhaWxzLnByaWNlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaG9uZVwiLCBjYXJEZXRhaWxzLnBob25lKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJjaXR5XCIsIGNhckRldGFpbHMuY2l0eSk7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXR0YWNobWVudHNcIiwgaW1hZ2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIik7XG4gICAgICBcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBsb2cgaW4gZmlyc3RcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vY2FyL2FkZGAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pO1xuXG4gICAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzdG9yZSBjYXIgZGV0YWlsc1wiKTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwibG9naW5Vc2VyIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJwYXNzd29yZCIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJzdG9yZUNhckRldGFpbHMiLCJjYXJEZXRhaWxzIiwiaW1hZ2VzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1vZGVsIiwicHJpY2UiLCJwaG9uZSIsImNpdHkiLCJmb3JFYWNoIiwiaW1hZ2UiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/api.js\n"));

/***/ })

});