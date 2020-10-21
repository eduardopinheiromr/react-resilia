import React from "react";
import bg from "../../assets/img/bg-home.jpg";

class Home extends React.Component {
  test() {
    console.log("testado");
  }
  render() {
    return (
      <div
        style={{
          height: `calc(100vh - 95px)`,
          backgroundImage: `url(${bg})`,
          backgroundSize: `calc(100%) calc(100%)`,
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          textShadow: `5px 5px 5px black`,
        }}
      >
        <h1 onMouseEnter={this.test} className="page-header">
          Bons Drinks
        </h1>
      </div>
    );
  }
}

export default Home;
