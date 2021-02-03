import React, { Component } from 'react'
import '../Textbox/textbox.css'

class Textbox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div class="card button-box">
          <div class="card-body">
            <h5 class="card-title">Normal State</h5>
            <input class="textbox normal-checkbox" placeholder="Click Me!" type="text" />
            <h5 class="card-title">Focused State</h5>
            <input class="textbox focused-checkbox" placeholder="Click Me!" type="text" />
          </div>
        </div>
      </>
    )
  }
}

export default Textbox
