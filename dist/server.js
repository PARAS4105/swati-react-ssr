/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/App */ \"./src/App.jsx\");\n/* harmony import */ var _src_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ErrorBoundary */ \"./src/components/ErrorBoundary.jsx\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_services_PropertList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/services/PropertList */ \"./src/services/PropertList.js\");\n/* harmony import */ var _src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/services/CompletedPropertyList */ \"./src/services/CompletedPropertyList.js\");\n/* harmony import */ var _src_services_PageList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/services/PageList */ \"./src/services/PageList.js\");\n/* harmony import */ var _src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/services/SocialMediaList */ \"./src/services/SocialMediaList.js\");\n/* harmony import */ var _src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/services/AdminDetail */ \"./src/services/AdminDetail.js\");\n/* harmony import */ var _src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/services/HomeDetail */ \"./src/services/HomeDetail.js\");\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n__webpack_require__(/*! ignore-styles */ \"ignore-styles\");\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\nconsole.log(\"🚀 server.js started\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconst PORT = 3000;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.get(\"*\", async (req, res) => {\n  try {\n    const isHomePage = req.url === \"/\";\n    const [AdminDetailData, PropertyListData, CompletedPropertyListData, PageListData, SocialMediaListData] = await Promise.all([(0,_src_services_AdminDetail__WEBPACK_IMPORTED_MODULE_12__.AdminDetail)(), (0,_src_services_PropertList__WEBPACK_IMPORTED_MODULE_8__.PropertyList)(), (0,_src_services_CompletedPropertyList__WEBPACK_IMPORTED_MODULE_9__.CompletedPropertyList)(), (0,_src_services_PageList__WEBPACK_IMPORTED_MODULE_10__.PageList)(), (0,_src_services_SocialMediaList__WEBPACK_IMPORTED_MODULE_11__.SocialMediaList)()]);\n    const homeDetailData = isHomePage ? await (0,_src_services_HomeDetail__WEBPACK_IMPORTED_MODULE_13__.HomeDetail)() : null;\n    const data = _objectSpread({\n      AdminDetailData,\n      PropertyListData,\n      CompletedPropertyListData,\n      PageListData,\n      SocialMediaListData\n    }, homeDetailData && {\n      homeDetailData\n    });\n    const appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_7__.StaticRouter, {\n      location: req.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: data\n    }))));\n    const html = \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>SSR App</title>\\n        <link rel=\\\"preload\\\" as=\\\"style\\\" href=\\\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\\\" />\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined\\\" />\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(appHtml, \"</div>\\n        <script>\\n          window.__INITIAL_DATA__ = \").concat(JSON.stringify(data).replace(/</g, '\\\\u003c'), \";\\n        </script>\\n        <script src=\\\"/bundle.js?v=\").concat(Date.now(), \"\\\"></script>\\n      </body>\\n    </html>\\n  \");\n    res.send(html);\n  } catch (error) {\n    console.error(\"SSR Error:\", error);\n    res.status(500).send(\"Something went wrong\");\n  }\n});\napp.listen(PORT, () => {\n  console.log(\"\\u2705 SSR server running at http://localhost:\".concat(PORT));\n});\n\n//# sourceURL=webpack://swati-react-ssr/./server/server.js?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.jsx\");\n\n\n\n\n\nconst App = _ref => {\n  let {\n    data\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    adminDetail: data.AdminDetailData,\n    propertylist: data.PropertyListData,\n    completedPropertylist: data.CompletedPropertyListData,\n    pageList: data.PageListData,\n    socialList: data.SocialMediaListData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      data: data.homeDetailData\n    })\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://swati-react-ssr/./src/App.jsx?");

/***/ }),

/***/ "./src/components/ErrorBoundary.jsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: false,\n      error: null\n    };\n  }\n  static getDerivedStateFromError(error) {\n    return {\n      hasError: true,\n      error\n    };\n  }\n  componentDidCatch(error, errorInfo) {\n    console.error(\"ErrorBoundary caught an error:\", error, errorInfo);\n  }\n  render() {\n    if (this.state.hasError) {\n      var _this$state$error;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: {\n          color: \"red\",\n          padding: \"2rem\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Something went wrong.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, (_this$state$error = this.state.error) === null || _this$state$error === void 0 ? void 0 : _this$state$error.message));\n    }\n    return this.props.children;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/ErrorBoundary.jsx?");

/***/ }),

/***/ "./src/components/Header.css":
/*!***********************************!*\
  !*** ./src/components/Header.css ***!
  \***********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/Header.css?");

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ \"./src/components/Header.css\");\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction Header(_ref) {\n  let {\n    adminDetail,\n    propertylist,\n    completedPropertylist,\n    pageList,\n    socialList\n  } = _ref;\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n  const pathName = location.pathname;\n  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [isMobileScreen, setMobileScreen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [categoryList, setCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [megaMenuCategory, setMegaMenuCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [megaMenuActive, setMegaMenuToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [menuToggle, setMenuToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const toggleAccordion = index => {\n    setActiveIndex(index === activeIndex ? null : index);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (window.innerWidth < 767) {\n      setMobileScreen(true);\n    }\n    if (Array.isArray(propertylist)) {\n      getCategory();\n    }\n    setIsMounted(true);\n  }, [propertylist]);\n  async function getCategory() {\n    try {\n      const categorySet = new Set();\n      const categoryArray = [];\n      propertylist.forEach(value => {\n        if (!categorySet.has(value.category)) {\n          categoryArray.push({\n            category: value.category\n          });\n          categorySet.add(value.category);\n        }\n      });\n      setCategoryList(categoryArray);\n    } catch (error) {\n      console.error(\"Error fetching property details:\", error);\n    }\n  }\n  const megaMenuClick = category => {\n    if (megaMenuCategory == category) {\n      setMegaMenuCategory('');\n      setMegaMenuToggle(false);\n    } else {\n      setMegaMenuCategory(category);\n      setMegaMenuToggle(true);\n    }\n  };\n  const megaMenuClickClose = () => {\n    setMegaMenuCategory('');\n    setMegaMenuToggle(false);\n  };\n  if (!categoryList || categoryList.length === 0) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, isMounted && (adminDetail === null || adminDetail === void 0 ? void 0 : adminDetail.logo) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: adminDetail.logo,\n    alt: adminDetail.name || \"Logo\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-links-ul\",\n    style: {\n      minHeight: \"1.5rem\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"link-font-size\"\n  }, categoryList.map((categoryData, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: index,\n    className: \"hide-tab-mobile\",\n    onClick: e => {\n      setMenuToggle(false);\n      megaMenuClick(categoryData.category);\n      e.stopPropagation();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"#\",\n    className: megaMenuCategory === categoryData.category ? 'active' : ''\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize \".concat(megaMenuCategory === categoryData.category ? 'secondary-color' : '')\n  }, categoryData.category === 'Commercial' ? 'Offices & Retail' : categoryData.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"material-symbols-outlined\"\n  }, \"keyboard_arrow_down\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"visible-tab-mobile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: e => {\n      setMenuToggle(false);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/call.svg\",\n    alt: \"Call icon\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"menubar \".concat(menuToggle ? 'active' : ''),\n    onClick: () => {\n      setMenuToggle(!menuToggle);\n      megaMenuClickClose();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-top\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-middle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"bar bar-bottom\"\n  })))))), megaMenuActive && propertylist.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenu-wrapper\",\n    id: \"megamenu-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenugrid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"megamenuContent\"\n  }, propertylist.map((data, index) => data.category === megaMenuCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    key: index,\n    className: \"megamenuItem relative inner-flex \\n                \".concat(pathName === data.slug ? \"active\" : \"\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    key: data.project_title,\n    to: data.slug,\n    className: \"inner-flex \",\n    onClick: () => {\n      megaMenuClickClose();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative\"\n  }, data.banner_data.image_web_type == 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-img-list overflow relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    loading: \"lazy\",\n    src: \"{data.banner_data.image_web_full}&w=430&h=340\",\n    alt: data.project_title,\n    style: {\n      aspectRatio: \"32/25\"\n    }\n  })), data.banner_data.image_web_type == 'video' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-img-list relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"video\", {\n    autoplay: true,\n    muted: true,\n    loop: true,\n    playsinline: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"source\", {\n    src: data.banner_data.image_web_full,\n    type: \"video/mp4\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-info-list\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"inner-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-paragraph flex-row j-c-sb alc\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    className: \"text-uppercase charter_regular\"\n  }, data.project_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-arrow-icon common-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/right_arrow_line.svg\",\n    alt: data.project_title\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"flex-row flex-wrapgap1 alc inner-flex-smallest\"\n  }, data.size_price && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-information-div flex-row alc inner-flex-smallest \".concat(isMobileScreen ? \"w100\" : \"\", \" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"building-icon common-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg\",\n    alt: \"Building Icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-textpara banner-detail-row-grid-text\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize ellipsis-1\"\n  }, data.size_price))), data.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"project-information-div flex-row alc inner-flex-smallest \".concat(isMobileScreen ? \"w100\" : \"\", \" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"building-icon common-icon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg\",\n    alt: \"Location Icon\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-textpara\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize ellipsis-1\"\n  }, data.location)))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"click-overlay \".concat(megaMenuActive || menuToggle ? \"active\" : \"\", \" \"),\n    onClick: () => {\n      megaMenuClickClose();\n      setMenuToggle();\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"mobile_menu_wrapper inner-flex inner-flex-medium j-c-sb  \".concat(menuToggle ? \"mobileMenuActive\" : \"\", \" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"header-navigation-links\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"\"\n  }, categoryList.map((category_data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: index,\n    className: \" accordion-block\",\n    id: \"accordion\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: () => toggleAccordion(index),\n    className: \"flex-row j-c-sb header_accordion accordion_click  \".concat(activeIndex === index ? \"active\" : \"\", \" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"section-paragraph\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize semibold-fonts\"\n  }, category_data.category == 'Commercial' ? \"Offices & Retail\" : category_data.category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/down-arrow.svg\",\n    alt: \"\",\n    className: \"manu-accordian-downarrow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/up-arrow.svg\",\n    alt: \"\",\n    className: \"manu-accordian-uparrow\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content_accordian \".concat(activeIndex === index ? \"content_accordianActive\" : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"inner-flex projectList_li inner-flex-zero\"\n  }, propertylist != null && propertylist.length > 0 && propertylist.map((data, index2) => {\n    if (data.category == category_data.category) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        key: index2\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: data.slug,\n        className: \"header-hover\",\n        onClick: () => {\n          setMenuToggle(false);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"inner-flex inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"w100 relative\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        loading: \"lazy\",\n        src: \"{data.banner_data.image_web_full}&w=430&h=340\",\n        alt: \"reecosys\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" w100 inner-flex inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"section-paragraph\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n        className: \" header-title capitalize \"\n      }, data.project_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row flex-wrapgap1 flex-row-mobile inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row alc\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"iconimg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" section-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"ellipsis-1\"\n      }, data.location))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row alc\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"iconimg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" section-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"ellipsis-1\"\n      }, data.size_price))))))));\n    }\n  }), completedPropertylist != null && completedPropertylist.length > 0 && completedPropertylist.map((data, index3) => {\n    if (data.category == category_data.category && data.project_id == '764') {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        key: index3\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: data.slug,\n        className: \"header-hover\",\n        onClick: () => {\n          setMenuToggle(false);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"inner-flex inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"w100 relative\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        loading: \"lazy\",\n        src: \"{data.banner_data.image_web_full}&w=430&h=340\"\n        //   style={{aspectRatio  : \"241/188\" }}\n        ,\n        alt: \"reecosys\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" w100 inner-flex inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"section-paragraph\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n        className: \" header-title capitalize \"\n      }, data.project_title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row flex-wrapgap1 flex-row-mobile inner-flex-smallest\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row alc\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"iconimg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/location.svg\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" section-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"ellipsis-1\"\n      }, data.location))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"flex-row alc\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"iconimg\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/building.svg\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \" section-content\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"ellipsis-1\"\n      }, data.size_price))))))));\n    }\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/completed-projects\",\n    className: \"capitalize section-paragraph \".concat(pathName == \"/completed-projects\" ? \"active_page\" : \"\", \" \"),\n    onClick: () => {\n      setMenuToggle(false);\n    },\n    title: \"Completed Projects\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Completed Projects\")))), pageList != null && pageList.length > 0 && pageList.map((data, index) => {\n    if (data.page_type == '' && data.is_profile_page == 0) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n        to: data.slug,\n        className: \"capitalize section-paragraph \".concat(pathName == data.slug ? \"active_page\" : \"\", \" \"),\n        onClick: () => {\n          setMenuToggle(false);\n        },\n        title: data.page_name,\n        target: data.slug_target\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, data.page_name))));\n    }\n  }), socialList != null && socialList.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"flex-row alc no-border\"\n  }, socialList.map((social, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"navigation-mobile-icon\",\n    key: index\n  }, social.name == 'facebook' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: social.slug,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/social-icons/facebook.svg\",\n    alt: \"facebook\"\n  })), social.name == 'instagram' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: social.slug,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/social-icons/instagram.svg\",\n    alt: \"instagram\"\n  })), social.name == 'twitter' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: social.slug,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/social-icons/twitter.svg\",\n    alt: \"twitter\"\n  })), social.name == 'linkedin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: social.slug,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/social-icons/linkedin.svg\",\n    alt: \"linkedin\"\n  })), social.name == 'youtube' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: social.slug,\n    target: \"_blank\",\n    rel: \"noopener noreferrer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: \"https://ik.imagekit.io/ol8mhbfe8/swati-procon/icon/social-icons/youtube.svg\",\n    alt: \"youtube\"\n  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w100 \"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"reecosys-template-button button-style-secondary w100 \",\n    \"ng-click\": \"inquire_popup_click();  inquiry_from_click(); \",\n    \"data-wow-duration\": \"0.6s\",\n    \"data-wow-delay\": \"0.6s\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"material-symbols-outlined\"\n  }, \"chat\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: \"capitalize\"\n  }, \"Inquire Now\")))));\n}\n\n//# sourceURL=webpack://swati-react-ssr/./src/components/Header.jsx?");

/***/ }),

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = _ref => {\n  let {\n    data\n  } = _ref;\n  // console.log(\"🏠 Home received data:\", data);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Welcome to the Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", null, JSON.stringify(data, null, 2)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://swati-react-ssr/./src/pages/Home.jsx?");

/***/ }),

/***/ "./src/services/AdminDetail.js":
/*!*************************************!*\
  !*** ./src/services/AdminDetail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminDetail: () => (/* binding */ AdminDetail)\n/* harmony export */ });\nconst AdminDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/admin/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        user_name: \"swatiprocon\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/AdminDetail.js?");

/***/ }),

/***/ "./src/services/CompletedPropertyList.js":
/*!***********************************************!*\
  !*** ./src/services/CompletedPropertyList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CompletedPropertyList: () => (/* binding */ CompletedPropertyList)\n/* harmony export */ });\nconst CompletedPropertyList = async () => {\n  console.log(\"✅ In Completed function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/completed_properties\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/CompletedPropertyList.js?");

/***/ }),

/***/ "./src/services/HomeDetail.js":
/*!************************************!*\
  !*** ./src/services/HomeDetail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeDetail: () => (/* binding */ HomeDetail)\n/* harmony export */ });\nconst HomeDetail = async () => {\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/home/details\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/HomeDetail.js?");

/***/ }),

/***/ "./src/services/PageList.js":
/*!**********************************!*\
  !*** ./src/services/PageList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PageList: () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = async () => {\n  console.log(\"✅ In PageList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/pages/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PageList.js?");

/***/ }),

/***/ "./src/services/PropertList.js":
/*!*************************************!*\
  !*** ./src/services/PropertList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PropertyList: () => (/* binding */ PropertyList)\n/* harmony export */ });\nconst PropertyList = async () => {\n  console.log(\"✅ In PropertyList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Services/properties/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        all_detail: \"1\",\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/PropertList.js?");

/***/ }),

/***/ "./src/services/SocialMediaList.js":
/*!*****************************************!*\
  !*** ./src/services/SocialMediaList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SocialMediaList: () => (/* binding */ SocialMediaList)\n/* harmony export */ });\nconst SocialMediaList = async () => {\n  console.log(\"✅ In SocialMediaList function\");\n  try {\n    const response = await fetch(\"https://www.reecosys.com/api/Admin/social_page/list\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\",\n        \"Authorization\": \"User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093\"\n      },\n      body: JSON.stringify({\n        master_user_id: \"373\",\n        logged_in_master_user_id: \"373\"\n      })\n    });\n    const data = await response.json(); // ✅ Parse JSON\n    if (data.success == 1) {\n      return data.data;\n    }\n  } catch (error) {\n    console.error(\"❌ API call failed:\", error);\n    return {};\n  }\n};\n\n//# sourceURL=webpack://swati-react-ssr/./src/services/SocialMediaList.js?");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://swati-react-ssr/./src/styles/globals.css?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/register");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "ignore-styles":
/*!********************************!*\
  !*** external "ignore-styles" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("ignore-styles");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	
/******/ })()
;