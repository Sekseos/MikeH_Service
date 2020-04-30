import React, { Component } from 'react';
import {hot} from "react-hot-loader";
import modules from './components/imgScroller';
import './App.css';
const starterImage = modules.Props.imageDivs[0];


//NOTE: imgScroller contains TWO things
// 1. 'Scroller' class
// 2. 'imageDivs' array
class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      currImage: []
    }
  };

  componentDidMount() {
    
  };

  // clickHandler = () => {
  //   // Grab image array from import
  //   // find currently selected image from that list using what the user clicked on
  //   // render that image as the currImage state
  // };

  render() {
    return (
      <div className="App">
        <table id='innerApp'>
          <thead id='main-image'>
            <tr id='Header'>
              <td className="Header">
                {this.state.currImage}
              </td>
            </tr>
          </thead>
          <tbody id='imgList'>
            <tr id='buttons'>
              <modules.Props.Scroller />
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default hot(module)(App);