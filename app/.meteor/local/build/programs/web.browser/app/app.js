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
  Stuffs: () => Stuffs,
  StuffSchema: () => StuffSchema
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
let SimpleSchema;
module.link("simpl-schema", {
  default(v) {
    SimpleSchema = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);

/** Create a Meteor collection. */
const Stuffs = new Mongo.Collection('Stuffs');
/** Create a schema to constrain the structure of documents associated with this collection. */

const StuffSchema = new SimpleSchema({
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let App;
module.link("../../ui/layouts/App.jsx", {
  default(v) {
    App = v;
  }

}, 3);

/** Startup the application by rendering the App layout component. */
Meteor.startup(() => {
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Menu;
module.link("semantic-ui-react", {
  Menu(v) {
    Menu = v;
  }

}, 1);

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {};
    return React.createElement("footer", null, React.createElement("div", {
      style: divStyle,
      className: "ui center aligned container",
      inverted: true
    }, React.createElement("hr", null), "Department of Information and Computer Sciences ", React.createElement("br", null), "University of Hawaii", React.createElement("br", null), "Honolulu, HI 96822"));
  }

}

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NavBar.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NavBar.jsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 3);
let withRouter, NavLink;
module.link("react-router-dom", {
  withRouter(v) {
    withRouter = v;
  },

  NavLink(v) {
    NavLink = v;
  }

}, 4);
let Menu, Dropdown, Header;
module.link("semantic-ui-react", {
  Menu(v) {
    Menu = v;
  },

  Dropdown(v) {
    Dropdown = v;
  },

  Header(v) {
    Header = v;
  }

}, 5);
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 6);

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
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
    }, "Add Club"), React.createElement(Menu.Item, {
      as: NavLink,
      activeClassName: "active",
      exact: true,
      to: "/list",
      key: "list"
    }, "List Club")] : '', Roles.userIsInRole(Meteor.userId(), 'admin') ? React.createElement(Menu.Item, {
      as: NavLink,
      activeClassName: "active",
      exact: true,
      to: "/admin",
      key: "admin"
    }, "Admin Manage Page") : '', React.createElement(Menu.Item, {
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

}
/** Declare the types of all properties. */


NavBar.propTypes = {
  currentUser: PropTypes.string
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : ''
}))(NavBar);
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Card, Image, Label;
module.link("semantic-ui-react", {
  Card(v) {
    Card = v;
  },

  Image(v) {
    Image = v;
  },

  Label(v) {
    Label = v;
  }

}, 1);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 2);
let withRouter;
module.link("react-router-dom", {
  withRouter(v) {
    withRouter = v;
  }

}, 3);

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
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

}
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

let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
module.link("semantic-ui-css/semantic.css");
let Roles;
module.link("meteor/alanning:roles", {
  Roles(v) {
    Roles = v;
  }

}, 3);
let Router, Route, Switch, Redirect;
module.link("react-router-dom", {
  HashRouter(v) {
    Router = v;
  },

  Route(v) {
    Route = v;
  },

  Switch(v) {
    Switch = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 4);
let NavBar;
module.link("../components/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 5);
let Footer;
module.link("../components/Footer", {
  default(v) {
    Footer = v;
  }

}, 6);
let Landing;
module.link("../pages/Landing", {
  default(v) {
    Landing = v;
  }

}, 7);
let Admin;
module.link("../pages/Browse3", {
  default(v) {
    Admin = v;
  }

}, 8);
let Browse;
module.link("../pages/Browse", {
  default(v) {
    Browse = v;
  }

}, 9);
let AddStuff;
module.link("../pages/Browse2", {
  default(v) {
    AddStuff = v;
  }

}, 10);
let EditStuff;
module.link("../pages/EditStuff", {
  default(v) {
    EditStuff = v;
  }

}, 11);
let NotFound;
module.link("../pages/NotFound", {
  default(v) {
    NotFound = v;
  }

}, 12);
let Signin;
module.link("../pages/Signin", {
  default(v) {
    Signin = v;
  }

}, 13);
let Signup;
module.link("../pages/Signup", {
  default(v) {
    Signup = v;
  }

}, 14);
let Signout;
module.link("../pages/Signout", {
  default(v) {
    Signout = v;
  }

}, 15);

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
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
      path: "/admin",
      component: Admin
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

}
/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */


const ProtectedRoute = (_ref) => {
  let {
    component: Component
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: props => {
      const isLogged = Meteor.userId() !== null;
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


const AdminProtectedRoute = (_ref2) => {
  let {
    component: Component
  } = _ref2,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["component"]);
  return React.createElement(Route, (0, _extends2.default)({}, rest, {
    render: props => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
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

}},"pages":{"Browse.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Browse.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Container, Card, Header, Loader, Input, Grid;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Card(v) {
    Card = v;
  },

  Header(v) {
    Header = v;
  },

  Loader(v) {
    Loader = v;
  },

  Input(v) {
    Input = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 3);
let StuffItem;
module.link("/imports/ui/components/StuffItem", {
  default(v) {
    StuffItem = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 6);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the page once subscriptions have been received. */


  renderPage() {
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
    }, this.props.stuffs.map(stuff => React.createElement(StuffItem, {
      key: stuff._id,
      stuff: stuff
    }))));
  }

}
/** Require an array of Stuff documents in the props. */


Browse.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready()
  };
})(Browse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Browse2.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Browse2.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Container, Card, Header, Loader, Input, Grid;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Card(v) {
    Card = v;
  },

  Header(v) {
    Header = v;
  },

  Loader(v) {
    Loader = v;
  },

  Input(v) {
    Input = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 3);
let StuffItem;
module.link("/imports/ui/components/StuffItem", {
  default(v) {
    StuffItem = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 6);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the page once subscriptions have been received. */


  renderPage() {
    return React.createElement(Container, null, React.createElement(Header, {
      as: "h2",
      textAlign: "center"
    }, "Add Club"), React.createElement(Grid, null, React.createElement(Grid.Column, {
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
    }, this.props.stuffs.map(stuff => React.createElement(StuffItem, {
      key: stuff._id,
      stuff: stuff
    }))));
  }

}
/** Require an array of Stuff documents in the props. */


Browse.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready()
  };
})(Browse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Browse3.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Browse3.jsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Container, Card, Header, Loader, Input, Grid;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Card(v) {
    Card = v;
  },

  Header(v) {
    Header = v;
  },

  Loader(v) {
    Loader = v;
  },

  Input(v) {
    Input = v;
  },

  Grid(v) {
    Grid = v;
  }

}, 2);
let Stuffs;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  }

}, 3);
let StuffItem;
module.link("/imports/ui/components/StuffItem", {
  default(v) {
    StuffItem = v;
  }

}, 4);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 5);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 6);

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Browse extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the page once subscriptions have been received. */


  renderPage() {
    return React.createElement(Container, null, React.createElement(Header, {
      as: "h2",
      textAlign: "center"
    }, "Admin Management Page"), React.createElement(Grid, null, React.createElement(Grid.Column, {
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
    }, this.props.stuffs.map(stuff => React.createElement(StuffItem, {
      key: stuff._id,
      stuff: stuff
    }))));
  }

}
/** Require an array of Stuff documents in the props. */


Browse.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Grid, Loader, Header, Segment;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Loader(v) {
    Loader = v;
  },

  Header(v) {
    Header = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 1);
let Stuffs, StuffSchema;
module.link("/imports/api/stuff/stuff", {
  Stuffs(v) {
    Stuffs = v;
  },

  StuffSchema(v) {
    StuffSchema = v;
  }

}, 2);
let Bert;
module.link("meteor/themeteorchef:bert", {
  Bert(v) {
    Bert = v;
  }

}, 3);
let AutoForm;
module.link("uniforms-semantic/AutoForm", {
  default(v) {
    AutoForm = v;
  }

}, 4);
let TextField;
module.link("uniforms-semantic/TextField", {
  default(v) {
    TextField = v;
  }

}, 5);
let NumField;
module.link("uniforms-semantic/NumField", {
  default(v) {
    NumField = v;
  }

}, 6);
let SelectField;
module.link("uniforms-semantic/SelectField", {
  default(v) {
    SelectField = v;
  }

}, 7);
let SubmitField;
module.link("uniforms-semantic/SubmitField", {
  default(v) {
    SubmitField = v;
  }

}, 8);
let HiddenField;
module.link("uniforms-semantic/HiddenField", {
  default(v) {
    HiddenField = v;
  }

}, 9);
let ErrorsField;
module.link("uniforms-semantic/ErrorsField", {
  default(v) {
    ErrorsField = v;
  }

}, 10);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 11);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 12);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 13);

/** Renders the Page for editing a single document. */
class EditStuff extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const {
      name,
      quantity,
      condition,
      _id
    } = data;
    Stuffs.update(_id, {
      $set: {
        name,
        quantity,
        condition
      }
    }, error => error ? Bert.alert({
      type: 'danger',
      message: "Update failed: ".concat(error.message)
    }) : Bert.alert({
      type: 'success',
      message: 'Update succeeded'
    }));
  }
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */


  render() {
    return this.props.ready ? this.renderPage() : React.createElement(Loader, {
      active: true
    }, "Getting data");
  }
  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */


  renderPage() {
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

}
/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */


EditStuff.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */

module.exportDefault(withTracker((_ref) => {
  let {
    match
  } = _ref;
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id; // Get access to Stuff documents.

  const subscription = Meteor.subscribe('Stuff');
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Grid, Icon, Header;
module.link("semantic-ui-react", {
  Grid(v) {
    Grid = v;
  },

  Icon(v) {
    Icon = v;
  },

  Header(v) {
    Header = v;
  }

}, 1);

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
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

}

module.exportDefault(Landing);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NotFound.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/NotFound.jsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Header;
module.link("semantic-ui-react", {
  Header(v) {
    Header = v;
  }

}, 1);

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class NotFound extends React.Component {
  render() {
    return React.createElement(Header, {
      as: "h2",
      textAlign: "center"
    }, React.createElement("p", null, "Page not found"));
  }

}

module.exportDefault(NotFound);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signin.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signin.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Signin
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let PropTypes;
module.link("prop-types", {
  default(v) {
    PropTypes = v;
  }

}, 1);
let Link, Redirect;
module.link("react-router-dom", {
  Link(v) {
    Link = v;
  },

  Redirect(v) {
    Redirect = v;
  }

}, 2);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 3);
let Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  Message(v) {
    Message = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 4);

class Signin extends React.Component {
  /** Initialize component state with properties for login and redirection. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      redirectToReferer: false
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /** Update the form controls each time the user interacts with them. */


  handleChange(e, _ref) {
    let {
      name,
      value
    } = _ref;
    this.setState({
      [name]: value
    });
  }
  /** Handle Signin submission using Meteor's account mechanism. */


  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.setState({
          error: '',
          redirectToReferer: true
        });
      }
    });
  }
  /** Render the signin form. */


  render() {
    const {
      from
    } = this.props.location.state || {
      from: {
        pathname: '/'
      }
    }; // if correct authentication, redirect to page instead of login screen

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

}

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
module.export({
  default: () => Signout
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Header;
module.link("semantic-ui-react", {
  Header(v) {
    Header = v;
  }

}, 2);

class Signout extends React.Component {
  render() {
    Meteor.logout();
    return React.createElement(Header, {
      as: "h2",
      textAlign: "center"
    }, React.createElement("p", null, "You are signed out."));
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Signup.jsx":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Signup.jsx                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => Signup
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Link;
module.link("react-router-dom", {
  Link(v) {
    Link = v;
  }

}, 1);
let Container, Form, Grid, Header, Message, Segment;
module.link("semantic-ui-react", {
  Container(v) {
    Container = v;
  },

  Form(v) {
    Form = v;
  },

  Grid(v) {
    Grid = v;
  },

  Header(v) {
    Header = v;
  },

  Message(v) {
    Message = v;
  },

  Segment(v) {
    Segment = v;
  }

}, 2);
let Accounts;
module.link("meteor/accounts-base", {
  Accounts(v) {
    Accounts = v;
  }

}, 3);

class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }; // Ensure that 'this' is bound to this component in these two functions.
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /** Update the form controls each time the user interacts with them. */


  handleChange(e, _ref) {
    let {
      name,
      value
    } = _ref;
    this.setState({
      [name]: value
    });
  }
  /** Handle Signup submission using Meteor's account mechanism. */


  handleSubmit() {
    const {
      email,
      password
    } = this.state;
    Accounts.createUser({
      email,
      username: email,
      password
    }, err => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {// browserHistory.push('/login');
      }
    });
  }
  /** Display the signup form. */


  render() {
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

}
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