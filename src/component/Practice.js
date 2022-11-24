import React from "react";
import { Link } from "react-router-dom";

<div>
  <Link to="/">Back-to-Product</Link>
</div>;
class Practice extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  render() {
    let { data } = this.state;
    // console.log("ookokokokk", data);
    return (
      <div>
        {data.map((getdata) => (
          <div className="container">
            Title :<h4>{getdata.title}</h4>
            <div>
              <Link to={"productDetail/" + getdata.id}>
                <img src={getdata.image} alt="Loading..." />
              </Link>
            </div>
          </div>
        ))}
        <div>
          <Link to="/">Back to Product</Link>
        </div>
        <h1>Hello Varun</h1>
      </div>
    );
  }
}

export default Practice;
