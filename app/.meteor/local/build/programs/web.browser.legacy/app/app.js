var require = meteorInstall({"imports":{"api":{"stuff":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/index.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./stuff.js");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stuff.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/stuff/stuff.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  Stuffs: function () {
    return Stuffs;
  },
  StuffSchema: function () {
    return StuffSchema;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var SimpleSchema;
module.link("simpl-schema", {
  "default": function (v) {
    SimpleSchema = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);

/** Create a Meteor collection. */
var Stuffs = new Mongo.Collection('Stuffs');
/** Create a schema to constrain the structure of documents associated with this collection. */

var StuffSchema = new SimpleSchema({
  name: String,
  location: String,
  time: String,
  interest: String,
  image: String,
  description: String
}, {
  tracker: Tracker
});
/** Attach this schema to the collection. */

Stuffs.attachSchema(StuffSchema);
/** Make the collection and schema available to other code. */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/both/index.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("/imports/api/stuff");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/index.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("./startup.jsx");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/startup.jsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var App;
module.link("../../ui/layouts/App.jsx", {
  "default": function (v) {
    App = v;
  }
}, 3);

/** Startup the application by rendering the App layout component. */
Meteor.startup(function () {
  render(React.createElement(App, null), document.getElementById('root')); // eslint-disable-line
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"ui":{"components":{"Footer.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Footer.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Menu;
module.link("semantic-ui-react", {
  Menu: function (v) {
    Menu = v;
  }
}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
var Footer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Footer, _React$Component);

  function Footer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function () {
    function render() {
      var divStyle = {};
      return React.createElement("footer", null, React.createElement("div", {
        style: divStyle,
        className: "ui center aligned container",
        inverted: true
      }, React.createElement("hr", null), "Department of Information and Computer Sciences ", React.createElement("br", null), "University of Hawaii", React.createElement("br", null), "Honolulu, HI 96822"));
    }

    return render;
  }();

  return Footer;
}(React.Component);

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NavBar.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NavBar.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 3);
var withRouter, NavLink;
module.link("react-router-dom", {
  withRouter: function (v) {
    withRouter = v;
  },
  NavLink: function (v) {
    NavLink = v;
  }
}, 4);
var Menu, Dropdown, Header;
module.link("semantic-ui-react", {
  Menu: function (v) {
    Menu = v;
  },
  Dropdown: function (v) {
    Dropdown = v;
  },
  Header: function (v) {
    Header = v;
  }
}, 5);
var Roles;
module.link("meteor/alanning:roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 6);

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
var NavBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavBar, _React$Component);

  function NavBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavBar.prototype;

  _proto.render = function () {
    function render() {
      var menuStyle = {
        marginBottom: '10px',
        padding: '50px',
        background: 'white'
      };
      return React.createElement(Menu, {
        style: menuStyle,
        attached: "top",
        borderless: true,
        color: "black"
      }, React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "",
        exact: true,
        to: "/"
      }, React.createElement(Header, {
        as: "h1"
      }, "Manoa Club")), this.props.currentUser ? [React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/add",
        key: "add"
      }, "Add Stuff"), React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/list",
        key: "list"
      }, "List Stuff")] : '', Roles.userIsInRole(Meteor.userId(), 'admin') ? React.createElement(Menu.Item, {
        as: NavLink,
        activeClassName: "active",
        exact: true,
        to: "/admin",
        key: "admin"
      }, "Admin") : '', React.createElement(Menu.Item, {
        position: "right"
      }, this.props.currentUser === '' ? React.createElement(Dropdown, {
        text: "Login",
        pointing: "top right",
        icon: 'user'
      }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
        icon: "user",
        text: "Sign In",
        as: NavLink,
        exact: true,
        to: "/signin"
      }), React.createElement(Dropdown.Item, {
        icon: "add user",
        text: "Sign Up",
        as: NavLink,
        exact: true,
        to: "/signup"
      }))) : React.createElement(Dropdown, {
        text: this.props.currentUser,
        pointing: "top right",
        icon: 'user'
      }, React.createElement(Dropdown.Menu, null, React.createElement(Dropdown.Item, {
        icon: "sign out",
        text: "Sign Out",
        as: NavLink,
        exact: true,
        to: "/signout"
      })))));
    }

    return render;
  }();

  return NavBar;
}(React.Component);
/** Declare the types of all properties. */


NavBar.propTypes = {
  currentUser: PropTypes.string
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

var NavBarContainer = withTracker(function () {
  return {
    currentUser: Meteor.user() ? Meteor.user().username : ''
  };
})(NavBar);
/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */

module.exportDefault(withRouter(NavBarContainer));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StuffItem.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/StuffItem.jsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Card, Image, Label;
module.link("semantic-ui-react", {
  Card: function (v) {
    Card = v;
  },
  Image: function (v) {
    Image = v;
  },
  Label: function (v) {
    Label = v;
  }
}, 1);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 2);
var withRouter;
module.link("react-router-dom", {
  withRouter: function (v) {
    withRouter = v;
  }
}, 3);

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
var StuffItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(StuffItem, _React$Component);

  function StuffItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = StuffItem.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement(Card, {
        centered: true
      }, React.createElement(Card.Content, null, React.createElement(Image, {
        floated: "right",
        size: "tiny",
        src: this.props.stuff.image
      }), React.createElement(Card.Header, null, this.props.stuff.name), React.createElement(Card.Meta, null, this.props.stuff.location), React.createElement(Card.Meta, null, this.props.stuff.time), React.createElement(Card.Description, null, this.props.stuff.description)), React.createElement(Card.Content, {
        extra: true
      }, React.createElement(Label, {
        color: "green"
      }, this.props.stuff.interest)));
    }

    return render;
  }();

  return StuffItem;
}(React.Component);
/** Require a document to be passed to this component. */


StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired
};
/** Wrap this component in withRouter since we use the <Link> React Router element. */

module.exportDefault(withRouter(StuffItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"App.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/App.jsx                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
module.link("semantic-ui-css/semantic.css");
var Roles;
module.link("meteor/alanning:roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 3);
var Router, Route, Switch, Redirect;
module.link("react-router-dom", {
  HashRouter: function (v) {
    Router = v;
  },
  Route: function (v) {
    Route = v;
  },
  Switch: function (v) {
    Switch = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 4);
var NavBar;
module.link("../components/NavBar", {
  "default": function (v) {
    NavBar = v;
  }
}, 5);
var Footer;
module.link("../components/Footer", {
  "default": function (v) {
    Footer = v;
  }
}, 6);
var Landing;
module.link("../pages/Landing", {
  "default": function (v) {
    Landing = v;
  }
}, 7);
var Browse;
module.link("../pages/Browse", {
  "default": function (v) {
    Browse = v;
  }
}, 8);
var AddStuff;
module.link("../pages/AddStuff", {
  "default": function (v) {
    AddStuff = v;
  }
}, 9);
var EditStuff;
module.link("../pages/EditStuff", {
  "default": function (v) {
    EditStuff = v;
  }
}, 10);
var NotFound;
module.link("../pages/NotFound", {
  "default": function (v) {
    NotFound = v;
  }
}, 11);
var Signin;
module.link("../pages/Signin", {
  "default": function (v) {
    Signin = v;
  }
}, 12);
var Signup;
module.link("../pages/Signup", {
  "default": function (v) {
    Signup = v;
  }
}, 13);
var Signout;
module.link("../pages/Signout", {
  "default": function (v) {
    Signout = v;
  }
}, 14);

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(App, _React$Component);

  function App() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = App.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement(Router, null, React.createElement("div", null, React.createElement(NavBar, null), React.createElement(Switch, null, React.createElement(Route, {
        exact: true,
        path: "/",
        component: Landing
      }), React.createElement(Route, {
        path: "/signin",
        component: Signin
      }), React.createElement(Route, {
        path: "/signup",
        component: Signup
      }), React.createElement(ProtectedRoute, {
        path: "/list",
        component: Browse
      }), React.createElement(ProtectedRoute, {
        path: "/add",
        component: AddStuff
      }), React.createElement(ProtectedRoute, {
        path: "/edit/:_id",
        component: EditStuff
      }), React.createElement(ProtectedRoute, {
        path: "/signout",
        component: Signout
      }), React.createElement(Route, {
        component: NotFound
      })), React.createElement(Footer, null)));
    }

    return render;
  }();

  return App;
}(React.Component);
/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


var ProtectedRoute = function (_ref) {
  var Component = _ref.component,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: function (props) {
      var isLogged = Meteor.userId() !== null;
      return isLogged ? React.createElement(Component, props) : React.createElement(Redirect, {
        to: {
          pathname: '/signin',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


var AdminProtectedRoute = function (_ref2) {
  var Component = _ref2.component,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: function (props) {
      var isLogged = Meteor.userId() !== null;
      var isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return isLogged && isAdmin ? React.createElement(Component, props) : React.createElement(Redirect, {
        to: {
          pathname: '/signin',
          state: {
            from: props.location
          }
        }
      });
    }
  }));
};
/** Require a component and location to be passed to each ProtectedRoute. */


ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
/** Require a component and location to be passed to each AdminProtectedRoute. */

AdminProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
module.exportDefault(App);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pages":{"AddStuff.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/AddStuff.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  },
  StuffSchema: function (v) {
    StuffSchema = v;
  }
}, 1);
var Grid, Segment, Header;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Segment: function (v) {
    Segment = v;
  },
  Header: function (v) {
    Header = v;
  }
}, 2);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 3);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 4);
var NumField;
module.link("uniforms-semantic/NumField", {
  "default": function (v) {
    NumField = v;
  }
}, 5);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 6);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 7);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 8);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 9);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 10);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 11);

/** Renders the Page for adding a document. */
var AddStuff =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AddStuff, _React$Component);

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  function AddStuff(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.submit = _this.submit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.insertCallback = _this.insertCallback.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.formRef = null;
    return _this;
  }
  /** Notify the user of the results of the submit. If successful, clear the form. */


  var _proto = AddStuff.prototype;

  _proto.insertCallback = function () {
    function insertCallback(error) {
      if (error) {
        Bert.alert({
          type: 'danger',
          message: "Add failed: " + error.message
        });
      } else {
        Bert.alert({
          type: 'success',
          message: 'Add succeeded'
        });
        this.formRef.reset();
      }
    }

    return insertCallback;
  }();
  /** On submit, insert the data. */


  _proto.submit = function () {
    function submit(data) {
      var name = data.name,
          quantity = data.quantity,
          condition = data.condition;
      var owner = Meteor.user().username;
      Stuffs.insert({
        name: name,
        quantity: quantity,
        condition: condition,
        owner: owner
      }, this.insertCallback);
    }

    return submit;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.render = function () {
    function render() {
      var _this2 = this;

      return React.createElement(Grid, {
        container: true,
        centered: true
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Add Stuff"), React.createElement(AutoForm, {
        ref: function (ref) {
          _this2.formRef = ref;
        },
        schema: StuffSchema,
        onSubmit: this.submit
      }, React.createElement(Segment, null, React.createElement(TextField, {
        name: "name"
      }), React.createElement(NumField, {
        name: "quantity",
        decimal: false
      }), React.createElement(SelectField, {
        name: "condition"
      }), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner",
        value: "fakeuser@foo.com"
      })))));
    }

    return render;
  }();

  return AddStuff;
}(React.Component);

module.exportDefault(AddStuff);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Browse.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Browse.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Container, Card, Header, Loader, Input, Grid;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Card: function (v) {
    Card = v;
  },
  Header: function (v) {
    Header = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Input: function (v) {
    Input = v;
  },
  Grid: function (v) {
    Grid = v;
  }
}, 2);
var Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  }
}, 3);
var StuffItem;
module.link("/imports/ui/components/StuffItem", {
  "default": function (v) {
    StuffItem = v;
  }
}, 4);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 5);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 6);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
var Browse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Browse, _React$Component);

  function Browse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Browse.prototype;

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the page once subscriptions have been received. */


  _proto.renderPage = function () {
    function renderPage() {
      return React.createElement(Container, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Browse"), React.createElement(Grid, null, React.createElement(Grid.Column, {
        width: 8
      }, React.createElement(Input, {
        fluid: true,
        icon: "search",
        placeholder: "Search..."
      })), React.createElement(Grid.Column, {
        width: 4
      }, React.createElement(Input, {
        fluid: true,
        placeholder: "Interest"
      }))), React.createElement(Card.Group, {
        itemsPerRow: 4
      }, this.props.stuffs.map(function (stuff) {
        return React.createElement(StuffItem, {
          key: stuff._id,
          stuff: stuff
        });
      })));
    }

    return renderPage;
  }();

  return Browse;
}(React.Component);
/** Require an array of Stuff documents in the props. */


Browse.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function () {
  // Get access to Stuff documents.
  var subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready()
  };
})(Browse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EditStuff.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/EditStuff.jsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Grid, Loader, Header, Segment;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Loader: function (v) {
    Loader = v;
  },
  Header: function (v) {
    Header = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 1);
var Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs: function (v) {
    Stuffs = v;
  },
  StuffSchema: function (v) {
    StuffSchema = v;
  }
}, 2);
var Bert;
module.link("meteor/themeteorchef:bert", {
  Bert: function (v) {
    Bert = v;
  }
}, 3);
var AutoForm;
module.link("uniforms-semantic/AutoForm", {
  "default": function (v) {
    AutoForm = v;
  }
}, 4);
var TextField;
module.link("uniforms-semantic/TextField", {
  "default": function (v) {
    TextField = v;
  }
}, 5);
var NumField;
module.link("uniforms-semantic/NumField", {
  "default": function (v) {
    NumField = v;
  }
}, 6);
var SelectField;
module.link("uniforms-semantic/SelectField", {
  "default": function (v) {
    SelectField = v;
  }
}, 7);
var SubmitField;
module.link("uniforms-semantic/SubmitField", {
  "default": function (v) {
    SubmitField = v;
  }
}, 8);
var HiddenField;
module.link("uniforms-semantic/HiddenField", {
  "default": function (v) {
    HiddenField = v;
  }
}, 9);
var ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  "default": function (v) {
    ErrorsField = v;
  }
}, 10);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 11);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 12);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 13);

/** Renders the Page for editing a single document. */
var EditStuff =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(EditStuff, _React$Component);

  function EditStuff() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = EditStuff.prototype;

  /** On successful submit, insert the data. */
  _proto.submit = function () {
    function submit(data) {
      var name = data.name,
          quantity = data.quantity,
          condition = data.condition,
          _id = data._id;
      Stuffs.update(_id, {
        $set: {
          name: name,
          quantity: quantity,
          condition: condition
        }
      }, function (error) {
        return error ? Bert.alert({
          type: 'danger',
          message: "Update failed: " + error.message
        }) : Bert.alert({
          type: 'success',
          message: 'Update succeeded'
        });
      });
    }

    return submit;
  }();
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  _proto.render = function () {
    function render() {
      return this.props.ready ? this.renderPage() : React.createElement(Loader, {
        active: true
      }, "Getting data");
    }

    return render;
  }();
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  _proto.renderPage = function () {
    function renderPage() {
      return React.createElement(Grid, {
        container: true,
        centered: true
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Edit Stuff"), React.createElement(AutoForm, {
        schema: StuffSchema,
        onSubmit: this.submit,
        model: this.props.doc
      }, React.createElement(Segment, null, React.createElement(TextField, {
        name: "name"
      }), React.createElement(NumField, {
        name: "quantity",
        decimal: false
      }), React.createElement(SelectField, {
        name: "condition"
      }), React.createElement(SubmitField, {
        value: "Submit"
      }), React.createElement(ErrorsField, null), React.createElement(HiddenField, {
        name: "owner"
      })))));
    }

    return renderPage;
  }();

  return EditStuff;
}(React.Component);
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditStuff.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(function (_ref) {
  var match = _ref.match;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  var documentId = match.params._id; // Get access to Stuff documents.

  var subscription = Meteor.subscribe('Stuff');
  return {
    doc: Stuffs.findOne(documentId),
    ready: subscription.ready()
  };
})(EditStuff));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Landing.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Landing.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Grid, Icon, Header;
module.link("semantic-ui-react", {
  Grid: function (v) {
    Grid = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Header: function (v) {
    Header = v;
  }
}, 1);

/** A simple static component to render some text for the landing page. */
var Landing =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Landing, _React$Component);

  function Landing() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Landing.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        className: "landing-background"
      }, React.createElement(Grid, {
        stackable: true,
        centered: true,
        container: true,
        columns: 6
      }, React.createElement(Grid.Column, {
        textAlign: "left"
      }, React.createElement(Icon, {
        color: " ",
        size: "huge",
        name: "search"
      }), React.createElement(Header, {
        as: "h1",
        color: "#006400"
      }, "Search"), React.createElement(Header, {
        as: "h3",
        color: "#006400"
      }, "Search for specific clubs that you may have heard about. If you do not have a particular club in mind, try searching for one that is within your interest.")), React.createElement(Grid.Column, {
        textAlign: "center"
      }), React.createElement(Grid.Column, {
        textAlign: "center"
      }), React.createElement(Grid.Column, {
        textAlign: "center"
      }), React.createElement(Grid.Column, {
        textAlign: "center"
      }), React.createElement(Grid.Column, {
        textAlign: "center"
      })));
    }

    return render;
  }();

  return Landing;
}(React.Component);

module.exportDefault(Landing);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NotFound.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/NotFound.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Header;
module.link("semantic-ui-react", {
  Header: function (v) {
    Header = v;
  }
}, 1);

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
var NotFound =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NotFound, _React$Component);

  function NotFound() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NotFound.prototype;

  _proto.render = function () {
    function render() {
      return React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, React.createElement("p", null, "Page not found"));
    }

    return render;
  }();

  return NotFound;
}(React.Component);

module.exportDefault(NotFound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signin.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  "default": function () {
    return Signin;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var PropTypes;
module.link("prop-types", {
  "default": function (v) {
    PropTypes = v;
  }
}, 1);
var Link, Redirect;
module.link("react-router-dom", {
  Link: function (v) {
    Link = v;
  },
  Redirect: function (v) {
    Redirect = v;
  }
}, 2);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 3);
var Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  Message: function (v) {
    Message = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 4);

var Signin =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signin, _React$Component);

  /** Initialize component state with properties for login and redirection. */
  function Signin(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Update the form controls each time the user interacts with them. */


  var _proto = Signin.prototype;

  _proto.handleChange = function () {
    function handleChange(e, _ref) {
      var _this$setState;

      var name = _ref.name,
          value = _ref.value;
      this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
    }

    return handleChange;
  }();
  /** Handle Signin submission using Meteor's account mechanism. */


  _proto.handleSubmit = function () {
    function handleSubmit() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      Meteor.loginWithPassword(email, password, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {
          _this2.setState({
            error: '',
            redirectToReferer: true
          });
        }
      });
    }

    return handleSubmit;
  }();
  /** Render the signin form. */


  _proto.render = function () {
    function render() {
      var _ref2 = this.props.location.state || {
        from: {
          pathname: '/'
        }
      },
          from = _ref2.from; // if correct authentication, redirect to page instead of login screen


      if (this.state.redirectToReferer) {
        return React.createElement(Redirect, {
          to: from
        });
      } // Otherwise return the Login form.


      return React.createElement(Container, null, React.createElement(Grid, {
        textAlign: "center",
        verticalAlign: "middle",
        centered: true,
        columns: 2
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Login to your account"), React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement(Segment, {
        stacked: true
      }, React.createElement(Form.Input, {
        label: "Email",
        icon: "user",
        iconPosition: "left",
        name: "email",
        type: "email",
        placeholder: "E-mail address",
        onChange: this.handleChange
      }), React.createElement(Form.Input, {
        label: "Password",
        icon: "lock",
        iconPosition: "left",
        name: "password",
        placeholder: "Password",
        type: "password",
        onChange: this.handleChange
      }), React.createElement(Form.Button, {
        content: "Submit"
      }))), React.createElement(Message, null, React.createElement(Link, {
        to: "/signup"
      }, "Click here to Register")), this.state.error === '' ? '' : React.createElement(Message, {
        error: true,
        header: "Login was not successful",
        content: this.state.error
      }))));
    }

    return render;
  }();

  return Signin;
}(React.Component);

/** Ensure that the React Router location object is available in case we need to redirect. */
Signin.propTypes = {
  location: PropTypes.object
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signout.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signout.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return Signout;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Header;
module.link("semantic-ui-react", {
  Header: function (v) {
    Header = v;
  }
}, 2);

var Signout =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signout, _React$Component);

  function Signout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Signout.prototype;

  _proto.render = function () {
    function render() {
      Meteor.logout();
      return React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, React.createElement("p", null, "You are signed out."));
    }

    return render;
  }();

  return Signout;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signup.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

module.export({
  "default": function () {
    return Signup;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Link;
module.link("react-router-dom", {
  Link: function (v) {
    Link = v;
  }
}, 1);
var Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container: function (v) {
    Container = v;
  },
  Form: function (v) {
    Form = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Header: function (v) {
    Header = v;
  },
  Message: function (v) {
    Message = v;
  },
  Segment: function (v) {
    Segment = v;
  }
}, 2);
var Accounts;
module.link("meteor/accounts-base", {
  Accounts: function (v) {
    Accounts = v;
  }
}, 3);

var Signup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Signup, _React$Component);

  /** Initialize state fields. */
  function Signup(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      email: '',
      password: '',
      error: ''
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    _this.handleSubmit = _this.handleSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** Update the form controls each time the user interacts with them. */


  var _proto = Signup.prototype;

  _proto.handleChange = function () {
    function handleChange(e, _ref) {
      var _this$setState;

      var name = _ref.name,
          value = _ref.value;
      this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
    }

    return handleChange;
  }();
  /** Handle Signup submission using Meteor's account mechanism. */


  _proto.handleSubmit = function () {
    function handleSubmit() {
      var _this2 = this;

      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      Accounts.createUser({
        email: email,
        username: email,
        password: password
      }, function (err) {
        if (err) {
          _this2.setState({
            error: err.reason
          });
        } else {// browserHistory.push('/login');
        }
      });
    }

    return handleSubmit;
  }();
  /** Display the signup form. */


  _proto.render = function () {
    function render() {
      return React.createElement(Container, null, React.createElement(Grid, {
        textAlign: "center",
        verticalAlign: "middle",
        centered: true,
        columns: 2
      }, React.createElement(Grid.Column, null, React.createElement(Header, {
        as: "h2",
        textAlign: "center"
      }, "Register your account"), React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement(Segment, {
        stacked: true
      }, React.createElement(Form.Input, {
        label: "Email",
        icon: "user",
        iconPosition: "left",
        name: "email",
        type: "email",
        placeholder: "E-mail address",
        onChange: this.handleChange
      }), React.createElement(Form.Input, {
        label: "Password",
        icon: "lock",
        iconPosition: "left",
        name: "password",
        placeholder: "Password",
        type: "password",
        onChange: this.handleChange
      }), React.createElement(Form.Button, {
        content: "Submit"
      }))), React.createElement(Message, null, "Already have an account? Login ", React.createElement(Link, {
        to: "/signin"
      }, "here")), this.state.error === '' ? '' : React.createElement(Message, {
        error: true,
        header: "Registration was not successful",
        content: this.state.error
      }))));
    }

    return render;
  }();

  return Signup;
}(React.Component);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"client":{"style.css":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/style.css                                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// These styles have already been applied to the document.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.link("/imports/startup/both");
module.link("../imports/startup/client");
module.link("./style.css");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".jsx"
  ]
});

require("/client/main.js");