"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "h1",
                null,
                "Todo List manager"
            );
        }
    }]);

    return Header;
}(React.Component);

var Activity = function (_React$Component2) {
    _inherits(Activity, _React$Component2);

    function Activity() {
        _classCallCheck(this, Activity);

        return _possibleConstructorReturn(this, (Activity.__proto__ || Object.getPrototypeOf(Activity)).apply(this, arguments));
    }

    _createClass(Activity, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                "Item"
            );
        }
    }]);

    return Activity;
}(React.Component);

var ActivityList = function (_React$Component3) {
    _inherits(ActivityList, _React$Component3);

    function ActivityList() {
        _classCallCheck(this, ActivityList);

        return _possibleConstructorReturn(this, (ActivityList.__proto__ || Object.getPrototypeOf(ActivityList)).apply(this, arguments));
    }

    _createClass(ActivityList, [{
        key: "render",
        value: function render() {
            return React.createElement(Activity, null);
        }
    }]);

    return ActivityList;
}(React.Component);

var template = React.createElement(
    "div",
    null,
    React.createElement(Header, null),
    React.createElement(ActivityList, null)
);

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(ActivityList, null)
    );
    ReactDOM.render(template, document.querySelector("#app"));
};

render();
