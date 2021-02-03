import React, { Component } from 'react'
import '../Button/Button.css'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div class="card button-box">
          <div class="card-body">
            <div className="normal">
              <button type="button" class="btn btn-primary button1">
                Click Me!
              </button>
              <label className="normal-label">Normal State</label>
            </div>
            <div className="focused">
              <button type="button" class="btn btn-primary button2">
                Click Me!
              </button>
              <label className="focused-label">Focused State</label>
            </div>
            <div className="pressed">
              <button type="button" class="btn btn-primary button3">
                Click Me!
              </button>
              <label className="pressed-label">Disabled State</label>
            </div>
            <div className="disabledd">
              <button type="button" class="btn btn-primary button4">
                Click Me!
              </button>
              <label className="disabled-label">Pressed State</label>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Button
