import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Catergories from './components/Catergories';
import './App.css';

function App() {
  return (
    <div>
      <h1>BookStore App</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/catergories">Catergories</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/catergories">
            <Catergories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
