import React, { Component } from "react";
import data from "./data";
import "./glasses.css";

const glasses = data;
console.log(glasses);
export default class Glasses extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: `/glassesImage/g1.jpg`,
      nameGlass: `GUCCI G8850U`,
      descGlass: `Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.`,
    };
  }

  changeGlass = (id, name, desc) => {
    const imgUrl = `/glassesImage/g${id}.jpg`;
    const nameGlass = `${name}`;
    const descGlass = `${desc}`;
    this.setState({ imgUrl, nameGlass, descGlass });
  };

  render() {

    return (
      <div className="bg-img">
        <div className="container">
          <h1 className="text-center">TRY GLASSES APP ONLINE</h1>
          <div className="row">
            <div className="col-sm-0 model">
              <div className="card text-start bg-model">
                <img
                  className="card-img-top"
                  src={this.state.imgUrl}
                  alt="Title"
                />
                <div className="card-body text-center">
                  <h4 className="card-title">{this.state.nameGlass}</h4>
                  <p className="card-text">{this.state.descGlass}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 model">
              <img
                src="/glassesImage/model.jpg"
                alt="Model"
                width="300px"
                height="360px"
              />
            </div>
          </div>
          <div className="row bg-glasses my-5 p-2">
            {glasses.map((glass) => {
              return (
                <div
                  key={glass.id}
                  className="col-sm-3"
                  onClick={() =>
                    this.changeGlass(glass.id, glass.name, glass.desc)
                  }
                  // onClick={() => console.log("keke", glass.name)}
                >
                  <img src={glass.url} width="100px" alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
