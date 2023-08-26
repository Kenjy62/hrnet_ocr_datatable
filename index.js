"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Datatable;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("./src/output.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Datatable(_ref) {
  var data = _ref.data;
  var _useState = (0, _react.useState)(data),
    _useState2 = _slicedToArray(_useState, 2),
    employees = _useState2[0],
    setEmployees = _useState2[1];
  function compareByFirstName(a, b) {
    var firstNameA = a.firstname.toUpperCase();
    var firstNameB = b.firstname.toUpperCase();
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
    return 0;
  }
  function compareByLastName(a, b) {
    var lastNameA = a.lastname.toUpperCase();
    var lastNameB = b.lastname.toUpperCase();
    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  }
  function compareByStartDate(a, b) {
    var startDateA = new Date(a.startdate.split("/").reverse().join("/"));
    var startDateB = new Date(b.startdate.split("/").reverse().join("/"));
    if (startDateA < startDateB) {
      return -1;
    }
    if (startDateA > startDateB) {
      return 1;
    }
    return 0;
  }
  function compareByDepartment(a, b) {
    var departmentA = a.department.toUpperCase();
    var departmentB = b.department.toUpperCase();
    if (departmentA < departmentB) {
      return -1;
    }
    if (departmentA > departmentB) {
      return 1;
    }
    return 0;
  }
  function compareByBirthdate(a, b) {
    var birthDateA = new Date(a.birthdate.split("/").reverse().join("/"));
    var birthDateB = new Date(b.birthdate.split("/").reverse().join("/"));
    if (birthDateA < birthDateB) {
      return -1;
    }
    if (birthDateA > birthDateB) {
      return 1;
    }
    return 0;
  }
  function compareByStreet(a, b) {
    var streetA = a.street.toUpperCase();
    var streetB = b.street.toUpperCase();
    if (streetA < streetB) {
      return -1;
    }
    if (streetA > streetB) {
      return 1;
    }
    return 0;
  }
  function compareByCity(a, b) {
    var cityA = a.city.toUpperCase();
    var cityB = b.city.toUpperCase();
    if (cityA < cityB) {
      return -1;
    }
    if (cityA > cityB) {
      return 1;
    }
    return 0;
  }
  function compareByState(a, b) {
    var stateA = a.state.toUpperCase();
    var stateB = b.state.toUpperCase();
    if (stateA < stateB) {
      return -1;
    }
    if (stateA > stateB) {
      return 1;
    }
    return 0;
  }
  function compareByZip(a, b) {
    var zipA = parseInt(a.zipcode);
    var zipB = parseInt(b.zipcode);
    if (zipA < zipB) {
      return -1;
    }
    if (zipA > zipB) {
      return 1;
    }
    return 0;
  }

  // State

  // Order Ascendant or Descendant
  var _useState3 = (0, _react.useState)("asc"),
    _useState4 = _slicedToArray(_useState3, 2),
    sortOrder = _useState4[0],
    setSortOrder = _useState4[1];

  // Set filtered By Fistname, lastname etc..
  var _useState5 = (0, _react.useState)("firstname"),
    _useState6 = _slicedToArray(_useState5, 2),
    filterBy = _useState6[0],
    setFilteredBy = _useState6[1];

  // Total Entries
  var _useState7 = (0, _react.useState)(employees === null || employees === void 0 ? void 0 : employees.length),
    _useState8 = _slicedToArray(_useState7, 2),
    totalEntries = _useState8[0],
    setTotalEntries = _useState8[1];

  // Number of Entries Display
  var _useState9 = (0, _react.useState)(5),
    _useState10 = _slicedToArray(_useState9, 2),
    entriesShowing = _useState10[0],
    setEntriesShowing = _useState10[1];

  // Data Viewing
  var _useState11 = (0, _react.useState)(employees),
    _useState12 = _slicedToArray(_useState11, 2),
    dataViewing = _useState12[0],
    setDataViewing = _useState12[1];

  // Number of entris at display
  var _useState13 = (0, _react.useState)(),
    _useState14 = _slicedToArray(_useState13, 2),
    numberEntriesDisplay = _useState14[0],
    setNumberEntriesInView = _useState14[1];

  // Actually Page
  var _useState15 = (0, _react.useState)(1),
    _useState16 = _slicedToArray(_useState15, 2),
    currentPage = _useState16[0],
    setCurrentPage = _useState16[1];

  // Header Icons
  var _useState17 = (0, _react.useState)({
      firstname: null,
      lastname: null,
      startdate: null,
      department: null,
      birthdate: null,
      street: null,
      city: null,
      state: null,
      zip: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    sortIcons = _useState18[0],
    setSortIcons = _useState18[1];

  // Reset Page, Set Options, Filtering,
  (0, _react.useEffect)(function () {
    setCurrentPage(1);
    var options = Array.from({
      length: Math.ceil((employees === null || employees === void 0 ? void 0 : employees.length) / 5)
    }, function (_, index) {
      return (index + 1) * 5;
    });
    setNumberEntriesInView(options);
    if (filterBy === "firstname") {
      var _data2;
      var _data;
      if (sortOrder === "asc") {
        _data = employees === null || employees === void 0 ? void 0 : employees.sort(compareByFirstName);
      } else {
        _data = employees === null || employees === void 0 ? void 0 : employees.sort(function (a, b) {
          return compareByFirstName(b, a);
        });
      }
      setDataViewing((_data2 = _data) === null || _data2 === void 0 ? void 0 : _data2.slice(0, entriesShowing));
    }
    if (filterBy === "lastname") {
      var _data4;
      var _data3;
      if (sortOrder === "asc") {
        _data3 = employees === null || employees === void 0 ? void 0 : employees.sort(compareByLastName);
      } else {
        _data3 = employees === null || employees === void 0 ? void 0 : employees.sort(function (a, b) {
          return compareByLastName(b, a);
        });
      }
      setDataViewing((_data4 = _data3) === null || _data4 === void 0 ? void 0 : _data4.slice(0, entriesShowing));
    }
    if (filterBy === "startdate") {
      var _data5;
      if (sortOrder === "asc") {
        _data5 = employees.sort(compareByStartDate);
      } else {
        _data5 = employees.sort(function (a, b) {
          return compareByStartDate(b, a);
        });
      }
      setDataViewing(_data5.slice(0, entriesShowing));
    }
    if (filterBy === "department") {
      var _data7;
      var _data6;
      if (sortOrder === "asc") {
        _data6 = employees.sort(compareByDepartment);
      } else {
        _data6 = employees.sort(function (a, b) {
          return compareByDepartment(b, a);
        });
      }
      setDataViewing((_data7 = _data6) === null || _data7 === void 0 ? void 0 : _data7.slice(0, entriesShowing));
    }
    if (filterBy === "birthdate") {
      var _data9;
      var _data8;
      if (sortOrder === "asc") {
        _data8 = employees.sort(compareByBirthdate);
      } else {
        _data8 = employees.sort(function (a, b) {
          return compareByBirthdate(b, a);
        });
      }
      setDataViewing((_data9 = _data8) === null || _data9 === void 0 ? void 0 : _data9.slice(0, entriesShowing));
    }
    if (filterBy === "city") {
      var _data11;
      var _data10;
      if (sortOrder === "asc") {
        _data10 = employees.sort(compareByCity);
      } else {
        _data10 = employees.sort(function (a, b) {
          return compareByCity(b, a);
        });
      }
      setDataViewing((_data11 = _data10) === null || _data11 === void 0 ? void 0 : _data11.slice(0, entriesShowing));
    }
    if (filterBy === "street") {
      var _data13;
      var _data12;
      if (sortOrder === "asc") {
        _data12 = employees.sort(compareByStreet);
      } else {
        _data12 = employees.sort(function (a, b) {
          return compareByStreet(b, a);
        });
      }
      setDataViewing((_data13 = _data12) === null || _data13 === void 0 ? void 0 : _data13.slice(0, entriesShowing));
    }
    if (filterBy === "state") {
      var _data15;
      var _data14;
      if (sortOrder === "asc") {
        _data14 = employees.sort(compareByState);
      } else {
        _data14 = employees.sort(function (a, b) {
          return compareByState(b, a);
        });
      }
      setDataViewing((_data15 = _data14) === null || _data15 === void 0 ? void 0 : _data15.slice(0, entriesShowing));
    }
    if (filterBy === "zip") {
      var _data17;
      var _data16;
      if (sortOrder === "asc") {
        _data16 = employees.sort(compareByZip);
      } else {
        _data16 = employees.sort(function (a, b) {
          return compareByZip(b, a);
        });
      }
      setDataViewing((_data17 = _data16) === null || _data17 === void 0 ? void 0 : _data17.slice(0, entriesShowing));
    }
  }, [filterBy, sortOrder, entriesShowing]);

  // Number of entries display and Pagination Gestion
  (0, _react.useEffect)(function () {
    var startIndex = (currentPage - 1) * entriesShowing;
    var endIndex = startIndex + entriesShowing;
    setDataViewing(employees === null || employees === void 0 ? void 0 : employees.slice(startIndex, endIndex));
  }, [currentPage, entriesShowing]);

  // See or hide a filtering icon
  var handleSortToggle = function handleSortToggle(field) {
    setFilteredBy(field);
    setSortOrder(function (prevOrder) {
      return prevOrder === "asc" ? "desc" : "asc";
    });
    var resetIcons = {
      firstname: null,
      lastname: null,
      startdate: null,
      department: null,
      birthdate: null,
      street: null,
      city: null,
      state: null,
      zip: null
    };
    setSortIcons(function (prevSortIcons) {
      return _objectSpread(_objectSpread({}, resetIcons), {}, _defineProperty({}, field, sortOrder === "asc" ? _freeSolidSvgIcons.faChevronUp : _freeSolidSvgIcons.faChevronDown));
    });
  };

  // Searchbar
  var handleSearchChange = function handleSearchChange(value) {
    if (value === "") {
      setDataViewing(employees === null || employees === void 0 ? void 0 : employees.slice(0, entriesShowing));
      return;
    }
    var filteredList = employees.filter(function (employee) {
      var searchableFields = ["firstname", "lastname", "startdate", "department", "birthdate", "street", "city", "state", "zipcode"];
      return searchableFields.some(function (field) {
        var fieldValue = employee[field].toLowerCase();
        return fieldValue.includes(value.toLowerCase());
      });
    });
    setDataViewing(filteredList);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row w-full justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row gap-2"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Show"), /*#__PURE__*/_react["default"].createElement("select", {
    onChange: function onChange(e) {
      return setEntriesShowing(e.target.value);
    }
  }, numberEntriesDisplay === null || numberEntriesDisplay === void 0 ? void 0 : numberEntriesDisplay.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option,
      value: option
    }, option);
  })), /*#__PURE__*/_react["default"].createElement("span", null, "entries")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row gap-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "searchbar"
  }, "Search :"), /*#__PURE__*/_react["default"].createElement("input", {
    id: "searchbar",
    onChange: function onChange(e) {
      return handleSearchChange(e.target.value);
    },
    className: "border border-black",
    type: "text"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex flex-row border-b border-black"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "block customTable"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return handleSortToggle("firstname");
    },
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "First Name"), sortIcons.firstname != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.firstname
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.firstname));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "block customTable"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      handleSortToggle("lastname");
    },
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Last Name"), sortIcons.lastname != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.lastname
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.lastname));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return handleSortToggle("startdate");
    },
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Start Date"), sortIcons.startdate != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.startdate
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.startdate));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("department");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Department"), sortIcons.department != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.department
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.department));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("birthdate");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Date Of Birth"), sortIcons.birthdate != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.birthdate
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.birthdate));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("street");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Street"), sortIcons.street != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.street
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.street));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("city");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "City"), sortIcons.city != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.city
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.city));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("state");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "State"), sortIcons.state != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.state
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.state));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "customTable block"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-b border-black cursor-pointer flex flex-row justify-between px-1 items-center gap-2",
    onClick: function onClick() {
      return handleSortToggle("zip");
    }
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Zip Code"), sortIcons.zip != null ? /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortIcons.zip
  }) : null), dataViewing === null || dataViewing === void 0 ? void 0 : dataViewing.map(function (e, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "border-b py-1"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "customTruncate block truncate w-[95%] hover:text-clip hover:whitespace-normal"
    }, e.zipcode));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row w-full justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Showing 1 to ", entriesShowing, " of ", totalEntries, " entries"), totalEntries > entriesShowing ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row gap-4"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Previous"), Array.from({
    length: Math.ceil(totalEntries / entriesShowing)
  }, function (_, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: index + 1,
      onClick: function onClick() {
        return setCurrentPage(index + 1);
      },
      className: "px-2 py-1 border ".concat(currentPage === index + 1 ? "bg-blue-500 text-white" : "")
    }, index + 1);
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Next")) : null));
}
