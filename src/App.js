import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About/About';
import Departments from './pages/Departments/Departments';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound/NotFound';
import Signup from './pages/Sginup/Signup';
import Workouts from './pages/Workouts/Workouts';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/workouts">
              <Workouts></Workouts>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
