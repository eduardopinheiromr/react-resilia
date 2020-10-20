import React from "react";
import bg from "../../assets/img/bg-home.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Home extends React.Component {
  test() {
    console.log("testado");
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <div
              style={{
                height: `calc(100vh - 95px)`,
                backgroundImage: `url(${bg})`,
                backgroundSize: `calc(100%) calc(100%)`,
                backgroundRepeat: "no-repeat",
                zIndex: 1,
              }}
            >
              <h1 onMouseEnter={this.test} className="page-header">
                Bons Drinks
              </h1>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Home;
