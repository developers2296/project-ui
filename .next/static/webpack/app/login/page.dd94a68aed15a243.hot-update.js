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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: function() { return /* binding */ BASE_URL; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   storeCarDetails: function() { return /* binding */ storeCarDetails; }\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3004/api\";\nconst loginUser = async (credentials)=>{\n    try {\n        const response = await fetch(\"http://localhost:3004/api/auth/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email: credentials.email,\n                password: credentials.password\n            })\n        });\n        if (!response.ok) {\n            const errorData = await response.json();\n            throw new Error(errorData.message || \"Login failed.\");\n        }\n        const data = await response.json();\n        return data; // Expected { token: \"JWT_TOKEN\" }\n    } catch (error) {\n        console.error(error);\n        throw error;\n    }\n};\nasync function storeCarDetails(carDetails, images) {\n    const formData = new FormData();\n    formData.append(\"model\", carDetails.model);\n    formData.append(\"price\", carDetails.price);\n    formData.append(\"phone\", carDetails.phone);\n    formData.append(\"city\", carDetails.city);\n    images.forEach((image)=>{\n        formData.append(\"images\", image);\n    });\n    const token = localStorage.getItem(\"authToken\");\n    if (!token) {\n        throw new Error(\"You must log in first\");\n    }\n    const response = await fetch(\"\".concat(BASE_URL, \"/car/add\"), {\n        method: \"POST\",\n        headers: {\n            Authorization: \"Bearer \".concat(token)\n        },\n        body: formData\n    });\n    if (!response.ok) {\n        throw new Error(\"Failed to store car details\");\n    }\n    return await response.json();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9hcGkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsV0FBVyw0QkFBNEI7QUFFN0MsTUFBTUMsWUFBWSxPQUFPQztJQUM1QixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUF3QztZQUNqRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNqQkMsT0FBT1IsWUFBWVEsS0FBSztnQkFDeEJDLFVBQVVULFlBQVlTLFFBQVE7WUFDbEM7UUFDSjtRQUVBLElBQUksQ0FBQ1IsU0FBU1MsRUFBRSxFQUFFO1lBQ2QsTUFBTUMsWUFBWSxNQUFNVixTQUFTVyxJQUFJO1lBQ3JDLE1BQU0sSUFBSUMsTUFBTUYsVUFBVUcsT0FBTyxJQUFJO1FBQ3pDO1FBRUEsTUFBTUMsT0FBTyxNQUFNZCxTQUFTVyxJQUFJO1FBQ2hDLE9BQU9HLE1BQU0sa0NBQWtDO0lBQ25ELEVBQUUsT0FBT0MsT0FBTztRQUNaQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2QsTUFBTUE7SUFDVjtBQUNKLEVBQUU7QUFFSyxlQUFlRSxnQkFBZ0JDLFVBQVUsRUFBRUMsTUFBTTtJQUNwRCxNQUFNQyxXQUFXLElBQUlDO0lBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU0osV0FBV0ssS0FBSztJQUN6Q0gsU0FBU0UsTUFBTSxDQUFDLFNBQVNKLFdBQVdNLEtBQUs7SUFDekNKLFNBQVNFLE1BQU0sQ0FBQyxTQUFTSixXQUFXTyxLQUFLO0lBQ3pDTCxTQUFTRSxNQUFNLENBQUMsUUFBUUosV0FBV1EsSUFBSTtJQUV2Q1AsT0FBT1EsT0FBTyxDQUFDLENBQUNDO1FBQ1pSLFNBQVNFLE1BQU0sQ0FBQyxVQUFVTTtJQUM5QjtJQUNBLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUVuQyxJQUFJLENBQUNGLE9BQU87UUFDVixNQUFNLElBQUlqQixNQUFNO0lBQ2xCO0lBRUEsTUFBTVosV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVEosVUFBUyxhQUFXO1FBQ2hESyxRQUFRO1FBQ1JDLFNBQVM7WUFDTDZCLGVBQWUsVUFBZ0IsT0FBTkg7UUFDN0I7UUFDQXpCLE1BQU1nQjtJQUNWO0lBRUEsSUFBSSxDQUFDcEIsU0FBU1MsRUFBRSxFQUFFO1FBQ2QsTUFBTSxJQUFJRyxNQUFNO0lBQ3BCO0lBRUEsT0FBTyxNQUFNWixTQUFTVyxJQUFJO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9hcGkuanM/MmEzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChjcmVkZW50aWFscykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDQvYXBpL2F1dGgvbG9naW5cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsIC8vIE1ha2Ugc3VyZSB0byBzZW5kIHRoZSBlbWFpbCBmaWVsZFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLm1lc3NhZ2UgfHwgXCJMb2dpbiBmYWlsZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7IC8vIEV4cGVjdGVkIHsgdG9rZW46IFwiSldUX1RPS0VOXCIgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvcmVDYXJEZXRhaWxzKGNhckRldGFpbHMsIGltYWdlcykge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwibW9kZWxcIiwgY2FyRGV0YWlscy5tb2RlbCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwicHJpY2VcIiwgY2FyRGV0YWlscy5wcmljZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgY2FyRGV0YWlscy5waG9uZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY2l0eVwiLCBjYXJEZXRhaWxzLmNpdHkpO1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlc1wiLCBpbWFnZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKTtcbiAgICAgIFxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGxvZyBpbiBmaXJzdFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9jYXIvYWRkYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBzdG9yZSBjYXIgZGV0YWlsc1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xufVxuIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwibG9naW5Vc2VyIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJwYXNzd29yZCIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJzdG9yZUNhckRldGFpbHMiLCJjYXJEZXRhaWxzIiwiaW1hZ2VzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1vZGVsIiwicHJpY2UiLCJwaG9uZSIsImNpdHkiLCJmb3JFYWNoIiwiaW1hZ2UiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/api.js\n"));

/***/ })

});