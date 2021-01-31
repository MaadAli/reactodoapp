"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  function TodoApp(props) {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleEditOption = _this.handleEditOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "handleEditOption",
    value: function handleEditOption(id) {
      var text = void 0;
      this.state.options.forEach(function (element) {
        if (element.id === id) {
          text = element.text;
        }
      });
      var newtext = prompt("Edit your name please", text);
      var newOptions = this.state.options.map(function (option) {
        if (option.id === id) {
          option['text'] = newtext;
          return option;
        } else {
          return option;
        }
      });
      this.setState(function (prevState) {
        return {
          options: newOptions
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Hello"
        ),
        React.createElement(Options, {
          options: this.state.options,
          handleEditOption: this.handleEditOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return TodoApp;
}(React.Component);

var Options = function (_React$Component2) {
  _inherits(Options, _React$Component2);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        null,
        this.props.options.map(function (option, index) {
          return React.createElement(Option, { key: index, option: option, id: index, handleEditOption: _this3.props.handleEditOption
          });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this4.editOpts = _this4.editOpts.bind(_this4);
    _this4.state = {
      error: undefined
    };
    return _this4;
  }

  _createClass(Option, [{
    key: "editOpts",
    value: function editOpts() {
      this.props.handleEditOption(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.option,
        React.createElement(
          "button",
          { onClick: this.editOpts() },
          "Edit"
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.handleAddOption = _this5.handleAddOption.bind(_this5);
    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));
