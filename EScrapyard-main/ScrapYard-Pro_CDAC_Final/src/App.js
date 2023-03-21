import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Password from "./pages/Password";
import User_register from "./pages/User_register";
import Login_dash from "./pages/Login_dash";
import User_Login from "./pages/User_Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDash from "./pages/AdminDash";
import UserList from "./components/UserList";
import Trederdash from "./components/TrederDash";
import TrderAdd from "./helpers/TrderAdd";
import Products from "./helpers/Products";
import Allproducts from "./helpers/Allproducts"
import DealerDash from "./components/DealerDash";
import DealerAdd from "./helpers/DealerAdd";
import AddStock from "./helpers/AddStock";
import Stock from "./helpers/Stock";
import BuyProduct  from "./helpers/BuyProduct";
import Buy from "./helpers/Buy";
import Complain from "./helpers/Complain";
import Placedorder from "./helpers/Placedorder";
import Order from "./helpers/Order";
import IndustrialistDash from "./components/IndustrialistDash";
import DealerList from "./components/DealerList";
import TradersList from "./components/TradersList";
import IndustrialistList from "./components/IndustrialistList";
import ListOfOrder from "./helpers/ListOfOrder";
import UpdateUser from "./helpers/UpdateUser.js";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/password" exact component={Password} />
          <Route path="/user_register" exact component={User_register} />
          <Route path="/user_login" exact component={User_Login} />
          <Route path="/login_dash" exact component={Login_dash} />
          <Route path="/admindash" exact component={AdminDash} />
          <Route path="/userlist" exact component={UserList} />
          <Route path="/trederdash" exact component={Trederdash} />
          <Route path="/trderAdd" exact component={TrderAdd} />
          <Route path="/products" exact component={Products} />
          <Route path="/allproducts" exact component={Allproducts} />
          <Route path="/dealerdash" exact component={DealerDash} />
          <Route path="/dealerAdd" exact component={DealerAdd} />
          <Route path="/addstock" exact component={AddStock} />
          <Route path="/stock" exact component={Stock} />
          <Route path="/buyproduct" exact component={BuyProduct} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/complain" exact component={Complain} />
          <Route path="/placedorder" exact component={Placedorder} />
          <Route path="/order" exact component={Order} />
          <Route path="/industrialistDash" exact component={IndustrialistDash} />
          <Route path="/dealerList" exact component={DealerList} />
          <Route path="/tradersList" exact component={TradersList} />
          <Route path="/industrialistList" exact component={IndustrialistList} />
          <Route path="/listoforder" exact component={ListOfOrder} />
          <Route path="/updateuser" exact component={UpdateUser} />
        </Switch>
        
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
