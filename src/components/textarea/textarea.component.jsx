import React from "react";
import "./textarea.styles.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          items: ''
      }
    }
      onSubmit = (event) => {
        event.preventDefault();
        const data = this.state.items;
        this.setState({
          items: data
        });
        const array = data.split("\n");
        console.log(array);
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