import React from "react";
import "./textarea.styles.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          items: []
      }
    }
    changeHandler = (event) => {
      this.setState({items: event.target.value});
    }
      onSubmit = (event) => {
        event.preventDefault();
        const data = this.state.items;
        this.setState({
          items: data
        });
        const array = data.split("\n");
        let totalWeight = [];
        const moto = 35;
        const van = 4500;
        const truck = 16000;
        for (let i in array){
          let newArray = array[i].match(/^([0-9]+)kg +([^ ]+) *(?:x([0-9]+))?$/);
          if(typeof newArray[3] === "undefined"){newArray[3] = 1}
          let weight = newArray[1];
          let qty = newArray[3];
          let productName = newArray[2];
          let item = [weight, qty, productName];
          totalWeight.push(item);
      }
      totalWeight.sort(function (a, b) {
      if (a[0] > b[0]) {
          return 1;
        }
        if (a[0] < b[1]) {
          return -1;
        }
        return 0;
      });
      console.log(totalWeight);
        
       };
      render(){
        return( 
            <div className="main">
              <form onSubmit={this.onSubmit}>
              <h1>Calculate how many vehicles you will use to delivery your list items.</h1>
              <p>Type your list below following the example.</p>
              <p>Example: 25kg furniture x2</p>
                <textarea  
                onChange={this.changeHandler}>
                </textarea>
                <div className="align-center">
                  <button 
                      type="submit" 
                      className="btn">Click me to distribute the items!
                  </button>
                </div>
              </form>
              <div className="distributed">
              <LocalShippingIcon></LocalShippingIcon> 
              <MotorcycleIcon></MotorcycleIcon> 
              {this.state.items}
              </div>
            </div>
        )
      }
    }

export default TextArea;