import React from 'react';
import './App.css';

function Display(props) {
  return (
    <div> 
    {props.value}
    </div>
    );
}

function Button(props) {

  return (
  <button
    onClick= {() => props.onClick(props.value)}> 
  {props.value}
  </button>
  );
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      previousValue: "0",
      displayValue: "0",
      operator: "",
      valueIsDecimal: false,
      valueIsNegative: false,
    }
  }

  handleClick(i){
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["+", "-", "x", "÷"];

    if(numbers.includes(i)){
      if (this.state.displayValue == "0"){
        this.setState({
          displayValue: i,
        });
      }
      else{
        var newValue = this.state.displayValue;
        newValue += i;
        this.setState({
          displayValue: newValue,
        });
      }
    }
    else if(i == "." && !this.state.valueIsDecimal){
      var newValue = this.state.displayValue;
      newValue += i;
      this.setState({
        displayValue: newValue,
        valueIsDecimal: true,
      });
    }
    else if (i == "AC"){
      this.setState({
        previousValue: "0",
        displayValue: "0",
        valueIsDecimal: false,
        valueIsNegative: false,
      });
    }
    else if(i == "+/-"){
      if(this.state.valueIsNegative){
        var newValue = this.state.displayValue;
        newValue = newValue.slice(1,newValue.length);
        this.setState({
          displayValue: newValue,
          valueIsNegative: false,
        });
      }
      else{
        var newValue = this.state.displayValue;
        newValue = "-" + newValue;
        this.setState({
          displayValue: newValue,
          valueIsNegative: true,
        });
      }
    }
    else if(i == "%"){
      var floatValue = parseFloat(this.state.displayValue);
      floatValue = floatValue / 100;
      var newValue = floatValue.toString();
      this.setState({
        displayValue: newValue,
      }); 
    }
    else if(operators.includes(i)){
      var newValue = this.state.displayValue;
      if(this.state.operator == ""){
        this.setState({
          operator: i,
          previousValue: newValue,
          displayValue: "0",
        });
      }
    }
    else{
      var operator = this.state.operator;
      if(this.state.operator == "x"){
        operator = "*";
      }
      else if(this.state.operator == "÷"){
        operator = "/";
      }
      var newValue = eval(this.state.previousValue + operator + this.state.displayValue);
      this.setState({
        operator: "",
        previousValue: "0",
        displayValue: newValue,
      });
    }
  }
  render(){
    /*
    const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    const numbered_buttons = [];
    for (let j = 0; j <= 2; j++){
      numbered_buttons.push( <div className="button"><Button 
      value={numbers[0][j]}/></div>);
    }*/
    return (
      <div className="root">
        <div className="app">
          <div className="display">
            <Display 
              value={this.state.displayValue}
            />
          </div>
          <div className="button-panel">
              <div>
                  <div className="button"><Button 
                    value={"AC"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"+/-"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"%"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button orange"><Button 
                    value={"÷"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
              </div>
              <div>
                  <div className="button"><Button 
                    value={"7"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"8"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"9"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button orange"><Button 
                    value={"x"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
              </div>
              <div>
                  <div className="button"><Button 
                    value={"4"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"5"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"6"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button orange"><Button 
                    value={"-"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
              </div>
              <div>
                  <div className="button"><Button 
                    value={"1"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"2"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"3"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button orange"><Button 
                    value={"+"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
              </div>
              <div>
                  <div className="button  wide"><Button 
                    value={"0"}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button"><Button 
                    value={"."}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
                  <div className="button orange"><Button 
                    value={"="}
                    onClick= {(i) => this.handleClick(i)}
                  /></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Calculator;
