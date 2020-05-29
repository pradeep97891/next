webpackHotUpdate("static/development/pages/chart.js",{

/***/ "./pages/chart.js":
/*!************************!*\
  !*** ./pages/chart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-plotly.js */ \"./node_modules/react-plotly.js/react-plotly.js\");\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/home/pradeepK/Documents/Study/React-sample/nex/pages/chart.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Chart = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Chart, _Component);\n\n  var _super = _createSuper(Chart);\n\n  function Chart(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Chart);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      data: [{\n        x: [\"Frank\", \"Jerry\", \"Jill\", \"Regis\", \"Tracy\"],\n        y: [87, 20, 72, 44, 0],\n        type: 'Scatter'\n      }, {\n        type: 'histogram',\n        x: [],\n        y: [2, 5, 3]\n      } //     {\n      //         x: \"Jill\",\n      //         y: 72,\n      //         type: \"histogram\"\n      //     },\n      //     {\n      //         x: \"Regis\",\n      //         y: 44,\n      //         type: \"histogram\"\n      //     },\n      //     {\n      //         x: \"Tracy\",\n      //         y: 0,\n      //         type: \"histogram\"\n      //     }\n      ]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Chart, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }\n      }, __jsx(react_plotly_js__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        data: [{// x: [\"Frank\", \"Jerry\", \"Jill\", \"Regis\", \"Tracy\"],\n          // y: [87, 20, 72, 44, 0],\n          // type: 'scatter',\n        }, {\n          type: 'histogram',\n          x: [],\n          y: [2, 5, 3]\n        }],\n        layout: {\n          width: 450,\n          height: 450,\n          title: 'Name vs WPM'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }\n      })));\n    }\n  }]);\n\n  return Chart;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chart);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGFydC5qcz9jNjg5Il0sIm5hbWVzIjpbIkNoYXJ0IiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJ4IiwieSIsInR5cGUiLCJ3aWR0aCIsImhlaWdodCIsInRpdGxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxDQUNGO0FBQ0lDLFNBQUMsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLE9BQTNCLEVBQW9DLE9BQXBDLENBRFA7QUFFSUMsU0FBQyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixDQUFqQixDQUZQO0FBR0lDLFlBQUksRUFBRTtBQUhWLE9BREUsRUFNRjtBQUVJQSxZQUFJLEVBQUUsV0FGVjtBQUV1QkYsU0FBQyxFQUFFLEVBRjFCO0FBRThCQyxTQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFGakMsT0FORSxDQVVGO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTNCRTtBQURHLEtBQWI7QUFIZTtBQWtDbEI7Ozs7NkJBRVE7QUFDTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHNEQUFEO0FBQ0ksWUFBSSxFQUFFLENBQ0YsQ0FDSTtBQUNBO0FBQ0E7QUFISixTQURFLEVBT0Y7QUFBRUMsY0FBSSxFQUFFLFdBQVI7QUFBcUJGLFdBQUMsRUFBRSxFQUF4QjtBQUE0QkMsV0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQO0FBQS9CLFNBUEUsQ0FEVjtBQVVJLGNBQU0sRUFBRTtBQUFFRSxlQUFLLEVBQUUsR0FBVDtBQUFjQyxnQkFBTSxFQUFFLEdBQXRCO0FBQTJCQyxlQUFLLEVBQUU7QUFBbEMsU0FWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixDQURKO0FBa0JIOzs7O0VBeERlQywrQzs7QUE2RExWLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBQbG90IGZyb20gJ3JlYWN0LXBsb3RseS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuY2xhc3MgQ2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogW1wiRnJhbmtcIiwgXCJKZXJyeVwiLCBcIkppbGxcIiwgXCJSZWdpc1wiLCBcIlRyYWN5XCJdLFxuICAgICAgICAgICAgICAgICAgICB5OiBbODcsIDIwLCA3MiwgNDQsIDBdLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU2NhdHRlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpc3RvZ3JhbScsIHg6IFtdLCB5OiBbMiwgNSwgM11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB4OiBcIkppbGxcIixcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeTogNzIsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiBcImhpc3RvZ3JhbVwiXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHg6IFwiUmVnaXNcIixcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeTogNDQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiBcImhpc3RvZ3JhbVwiXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHg6IFwiVHJhY3lcIixcblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6IFwiaGlzdG9ncmFtXCJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxQbG90XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4OiBbXCJGcmFua1wiLCBcIkplcnJ5XCIsIFwiSmlsbFwiLCBcIlJlZ2lzXCIsIFwiVHJhY3lcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHk6IFs4NywgMjAsIDcyLCA0NCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHR5cGU6ICdzY2F0dGVyJyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiAnaGlzdG9ncmFtJywgeDogW10sIHk6IFsyLCA1LCAzXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD17eyB3aWR0aDogNDUwLCBoZWlnaHQ6IDQ1MCwgdGl0bGU6ICdOYW1lIHZzIFdQTScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chart.js\n");

/***/ })

})