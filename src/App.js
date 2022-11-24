import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./component/ProductListing";
import Practice from "./component/Practice";
import Header from "./component/Header";
import UsersData from "./component/UsersData";
//import ProductDetail from "./component/ProductDetail";
import MyComponent from "./component/MyComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/practice" exact component={Practice} />
          <Route path="/getallusers" exact component={UsersData} />
          <Route path="/myComponent" exact component={MyComponent} />

          {/* <Route path="/product/productId" exact component={} /> */}
          <Route>
            <h1 style={{ textAlign: "center", color: "red" }}>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
