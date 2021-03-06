import React from 'react';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
import Books from './Books';
import Catergories from './Catergories';
import './Nav.css';
import './Catergories.css';

export default function Nav() {
  return (
    <Router>
      <header>
        <nav>
          <div className="nav-bar">
            <h1 className="nav-title">Bookstore CMS</h1>
            <ul>
              <li>
                <Link to="/" className="nav-books">
                  BOOKS
                </Link>
              </li>
              <li>
                <Link to="/categories" className="nav-categories">
                  CATERGORIES
                </Link>
              </li>
            </ul>
          </div>
          <div className="user-icon-wrapper">
            <i className="fas fa-user-alt" />
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/categories">
          <Catergories />
        </Route>
        <Route path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}
