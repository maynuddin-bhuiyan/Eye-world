import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";
import SinglePage from './Pages/SinglePage/SinglePage';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import SinglePageDetails from './Pages/SinglePageDetails/SinglePageDetails';
import Login from './Pages/Login/Login/Login';
import DetailsBuy from './Pages/DetailsBuy/DetailsBuy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
        <Home />
        </Route>

        <Route path="/login">
        <Login />
        </Route>
        <Route path='/detailsItam/:id'>
 
            <SinglePageDetails></SinglePageDetails>
        </Route>
        <Route path='/detailsBuy/:id'>
 
            <DetailsBuy></DetailsBuy>
        </Route>

        <Route path="/singlepage">
        <SinglePage />
        </Route>

      </Switch>

      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
