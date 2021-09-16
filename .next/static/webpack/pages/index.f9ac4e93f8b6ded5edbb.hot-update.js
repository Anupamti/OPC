webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\01-starting-setup\\nextjs\\pages\\index.js";



var meetups = [{
  id: 'm1',
  title: 'A first Meetup',
  image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  address: ' this is addresss',
  description: 'this is a first meetup'
}, {
  id: 'm2',
  title: 'A first Meetup',
  image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  address: ' this is addresss',
  description: 'this is a first meetup'
}, {
  id: 'm3',
  title: 'A first Meetup',
  image: 'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  address: ' this is addresss',
  description: 'this is a first meetup'
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "React Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "desccription",
        content: "Browse a huge list of  React meetups "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        meetups: meetups
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_c = HomePage;
// these codes only run on server and user will not be able to see it 
// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: meetups
//         },
//         revalidate: 10
//will change evry 10 seconds
//     }
// }
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWVldHVwcyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQ1o7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSx5SkFIWDtBQUlJQyxTQUFPLEVBQUUsbUJBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBRFksRUFRWjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLHlKQUhYO0FBSUlDLFNBQU8sRUFBRSxtQkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FSWSxFQWVaO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxnQkFGWDtBQUdJQyxPQUFLLEVBQUUseUpBSFg7QUFJSUMsU0FBTyxFQUFFLG1CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZZLENBQWhCOztBQXdCQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTixlQUNJO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJLHFFQUFDLGlFQUFEO0FBQUEsNkJBQ0kscUVBQUMsc0VBQUQ7QUFBWSxlQUFPLEVBQUVQO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7S0FaUU0sUTtBQXdCVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjlhYzRlOTNmOGI2ZGVkNWVkYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5jb25zdCBtZWV0dXBzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnQSBmaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTIxNTE4NTU0NzUtODc3OTY5ZjRhNmNjP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OGFHUWxNakJwYldGblpYeGxibnd3Zkh3d2ZIdyUzRCZpeGxpYj1yYi0xLjIuMSZ3PTEwMDAmcT04MCcsXHJcbiAgICAgICAgYWRkcmVzczogJyB0aGlzIGlzIGFkZHJlc3NzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnQSBmaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTIxNTE4NTU0NzUtODc3OTY5ZjRhNmNjP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OGFHUWxNakJwYldGblpYeGxibnd3Zkh3d2ZIdyUzRCZpeGxpYj1yYi0xLjIuMSZ3PTEwMDAmcT04MCcsXHJcbiAgICAgICAgYWRkcmVzczogJyB0aGlzIGlzIGFkZHJlc3NzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTMnLFxyXG4gICAgICAgIHRpdGxlOiAnQSBmaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTIxNTE4NTU0NzUtODc3OTY5ZjRhNmNjP2l4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TVh4OGFHUWxNakJwYldGblpYeGxibnd3Zkh3d2ZIdyUzRCZpeGxpYj1yYi0xLjIuMSZ3PTEwMDAmcT04MCcsXHJcbiAgICAgICAgYWRkcmVzczogJyB0aGlzIGlzIGFkZHJlc3NzJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoaXMgaXMgYSBmaXJzdCBtZWV0dXAnXHJcbiAgICB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkPjx0aXRsZT5SZWFjdCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjY3JpcHRpb25cIiBjb250ZW50PVwiQnJvd3NlIGEgaHVnZSBsaXN0IG9mICBSZWFjdCBtZWV0dXBzIFwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXttZWV0dXBzfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHRoZXNlIGNvZGVzIG9ubHkgcnVuIG9uIHNlcnZlciBhbmQgdXNlciB3aWxsIG5vdCBiZSBhYmxlIHRvIHNlZSBpdCBcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBwcm9wczoge1xyXG4vLyAgICAgICAgICAgICBtZWV0dXBzOiBtZWV0dXBzXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICByZXZhbGlkYXRlOiAxMFxyXG4vL3dpbGwgY2hhbmdlIGV2cnkgMTAgc2Vjb25kc1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9