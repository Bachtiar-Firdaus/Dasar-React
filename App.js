/* File: src/App.js */

import React from "react";
import { Switch, Route, NavLink, Prompt } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Post from "./pages/Post";
import Member from "./pages/Member";
import Login from "./pages/Login";
import GuardRoute from "./components/GuardRoute";

const routes = [
  {
    path: "/",
    Component: Home,
    props: {
      exact: true,
    },
  },
  {
    path: "/about",
    Component: About,
  },
  // {
  //   path: "/member",
  //   Component: Member,
  //   props: {
  //     auth: true,
  //     isLogin: isLogin,
  //   },
  // },
  // {
  //   path: "/login",
  //   Component: Login,
  //   childProps: { setLogin },
  // },
  {
    path: "/category",
    Component: Category,
  },
  {
    path: "/post:id",
    Component: Post,
  },
];

function App() {
  const [isLogin, setLogin] = React.useState(false);

  return (
    <div className="App">
      <ul className="menu">
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/member" activeClassName="active">
            Member
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">
            Category
          </NavLink>
        </li>

        <li>
          {isLogin ? (
            <NavLink
              to="/logout"
              onClick={(e) => {
                e.preventDefault();
                setLogin(false);
              }}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" activeClassName="active">
              Login
            </NavLink>
          )}
        </li>
      </ul>
      <div className="main">
        <Switch>
          {routes.map((route, i) => {
            const { path, Component, props, childProps } = route;
            return props && props.auth ? (
              <GuardRoute key={i} path={path} {...props}>
                <Component {...childProps} />
              </GuardRoute>
            ) : (
              <Route key={i} path={path} {...props}>
                <Component {...childProps} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}

export default App;
