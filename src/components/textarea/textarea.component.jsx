import React from "react";
import "./textarea.styles.css";

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: '' };
      }
      changeHandler = (event) => {
        this.setState({items: event.target.value});
      }
      render() {
        return (
          <form>
          <h1>To be distributed {this.state.items}</h1>
          <p>Enter the items here:</p>
            <textarea onChange={this.changeHandler}>
            25kg geladeira x23
            </textarea>
          </form>
        );
      }
    }

export default TextArea;