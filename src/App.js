import React from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25 2018',
      newDeadline: ''
    }
    this.changeDeadline = this.changeDeadline.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }

  handleInput(event){
    this.setState({newDeadline: event.target.value})
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={this.handleInput}
          />
          <Button onClick={this.changeDeadline}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App
