import './App.css';
import Nav from './Component/Tugas-2/Tugas2-nav'
import About from './Component/Tugas-2/Tugas2-about'
import { DataBooks } from './Component/BooksContext';
import Index from './Component/Tugas-2/Tugas2-index';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Books from './Component/DataBooks';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <DataBooks>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
        <Footer />
      </DataBooks>
    </Router>
  );
}

export default App;
