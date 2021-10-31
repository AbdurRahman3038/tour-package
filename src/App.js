import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddNew from './components/AddNew/AddNew';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authprovider from './context/AuthProvider';
import ManagePackage from './components/ManagePackage/ManagePackage';

function App() {
  return (
    <div>
      <Authprovider>

        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="/manage-orders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/manage-packages">
              <ManagePackage></ManagePackage>
            </Route>
            <Route path="/add-new">
              <AddNew></AddNew>
            </Route>

            <PrivateRoute path="/booking/:packageId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
