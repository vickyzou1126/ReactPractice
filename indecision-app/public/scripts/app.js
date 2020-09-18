"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Indecision = /*#__PURE__*/function (_React$Component) {
  _inherits(Indecision, _React$Component);

  var _super = _createSuper(Indecision);

  function Indecision(props) {
    var _this;

    _classCallCheck(this, Indecision);

    _this = _super.call(this, props);
    _this.state = {
      options: props.options
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.removeOption = _this.removeOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Indecision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("saving data");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("ComponentWillUnmount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      /*this.setState(() => {
          return {
              options: []
          }
      })*/
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick(e) {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      console.log(option);

      if (!option) {
        return "Enter valid value";
      } else if (this.state.options.indexOf(option) > -1) {
        return "Option exists";
      }
      /*this.setState((prev) => {
          return {
              options: prev.options.concat(option)
          }
      })*/


      this.setState(function (prev) {
        return {
          options: prev.options.concat(option)
        };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(option) {
      console.log(option);
      /*this.setState((prev) => {
          return {
              options: prev.options.filter(op => op != option)
          }
      })*/

      this.setState(function (prev) {
        return {
          options: prev.options.filter(function (op) {
            return op != option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const title = "Indecision" 
      var subtitle = "Put your life in the hands of a computer";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        removeOption: this.removeOption
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return Indecision;
}(React.Component);

Indecision.defaultProps = {
  options: ["Thing one", "Thing two"]
};

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: "Default Title"
};
/*class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}*/

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should I do?"));
};
/*class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}*/


var Options = function Options(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All"), props.options.map(function (option) {
    return /*#__PURE__*/React.createElement(Option, {
      key: option,
      optionText: option,
      removeOption: props.removeOption
    });
  }));
};
/*class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => 
                        <Option key={option} optionText={option} removeOption={this.props.removeOption} />
                    ) 
                }
            </div>
        )
    }
}*/


var Option = function Option(props) {
  return /*#__PURE__*/React.createElement("div", null, props.optionText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      props.removeOption(props.optionText);
    },
    value: props.optionText
  }, "remove"));
};
/*class Option extends React.Component {
    constructor(props){
        super(props)
        this.removeOption = this.removeOption.bind(this)
    }

    removeOption(e) {
        e.preventDefault();
        this.props.removeOption(e.target.value)
    }

    render() {
        return (
            <div>
                {this.props.optionText}
                <button onClick={this.removeOption} value={this.props.optionText}>remove</button>
            </div>
        )
    }
}*/


var AddOption = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  var _super2 = _createSuper(AddOption);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _super2.call(this, props);
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      /*this.setState(() => {
          return {error}
      })*/

      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddOption
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Submit")));
    }
  }]);

  return AddOption;
}(React.Component);
/*const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>  
            <p>Age: {props.age}</p>
        </div>
    )
}
// not this.props.xxx
ReactDOM.render(<User name="Vicky" age={12} />, document.getElementById("app"));*/


ReactDOM.render( /*#__PURE__*/React.createElement(Indecision, null), document.getElementById("app"));
