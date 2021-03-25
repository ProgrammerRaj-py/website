import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="/blog" component={ Blogs } />
        <Route exact path="/contact" component={ Contact } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
