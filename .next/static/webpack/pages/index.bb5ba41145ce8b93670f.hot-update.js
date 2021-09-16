webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
        meetups: meetups
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsibWVldHVwcyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlCQUFpQixtQkFBTyxDQUFDLHFGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEQ7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsT0FBTyxHQUFHLENBQ1o7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGdCQUZYO0FBR0lDLE9BQUssRUFBRSx5SkFIWDtBQUlJQyxTQUFPLEVBQUUsbUJBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBRFksRUFRWjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLHlKQUhYO0FBSUlDLFNBQU8sRUFBRSxtQkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FSWSxFQWVaO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxnQkFGWDtBQUdJQyxPQUFLLEVBQUUseUpBSFg7QUFJSUMsU0FBTyxFQUFFLG1CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZZLENBQWhCOztBQXdCQSxTQUFTQyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNyQixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLGlFQUFEO0FBQUEsNkJBQ0kscUVBQUMsc0VBQUQ7QUFBWSxlQUFPLEVBQUVQO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0tBUlFNLFE7QUFvQlQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWVBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiNWJhNDExNDVjZThiOTM2NzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgbWVldHVwcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogJ20xJyxcclxuICAgICAgICB0aXRsZTogJ0EgZmlyc3QgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEyMTUxODU1NDc1LTg3Nzk2OWY0YTZjYz9peGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhhR1FsTWpCcGJXRm5aWHhsYm53d2ZId3dmSHclM0QmaXhsaWI9cmItMS4yLjEmdz0xMDAwJnE9ODAnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcgdGhpcyBpcyBhZGRyZXNzcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0aGlzIGlzIGEgZmlyc3QgbWVldHVwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ20yJyxcclxuICAgICAgICB0aXRsZTogJ0EgZmlyc3QgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEyMTUxODU1NDc1LTg3Nzk2OWY0YTZjYz9peGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhhR1FsTWpCcGJXRm5aWHhsYm53d2ZId3dmSHclM0QmaXhsaWI9cmItMS4yLjEmdz0xMDAwJnE9ODAnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcgdGhpcyBpcyBhZGRyZXNzcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0aGlzIGlzIGEgZmlyc3QgbWVldHVwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ20zJyxcclxuICAgICAgICB0aXRsZTogJ0EgZmlyc3QgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjEyMTUxODU1NDc1LTg3Nzk2OWY0YTZjYz9peGlkPU1ud3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1YeDhhR1FsTWpCcGJXRm5aWHhsYm53d2ZId3dmSHclM0QmaXhsaWI9cmItMS4yLjEmdz0xMDAwJnE9ODAnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcgdGhpcyBpcyBhZGRyZXNzcycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICd0aGlzIGlzIGEgZmlyc3QgbWVldHVwJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17bWVldHVwc30gLz5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbiAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyB0aGVzZSBjb2RlcyBvbmx5IHJ1biBvbiBzZXJ2ZXIgYW5kIHVzZXIgd2lsbCBub3QgYmUgYWJsZSB0byBzZWUgaXQgXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogbWVldHVwc1xyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgcmV2YWxpZGF0ZTogMTBcclxuLy93aWxsIGNoYW5nZSBldnJ5IDEwIHNlY29uZHNcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==