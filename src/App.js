import React, { Component } from 'react'
import './App.css'
import Button from './Component/Button/Button'
import Textbox from './Component/Textbox/Textbox'
import Checkbox from './Component/Checkbox/Checkbox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="heading">Checkbox</p>
              <Checkbox />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="heading">Button</p>
              <Button />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <p className="heading">Textbox</p>
              <Textbox />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
