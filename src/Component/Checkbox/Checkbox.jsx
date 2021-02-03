import React, { Component } from 'react'
import '../Checkbox/checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div class="card button-box">
          <div class="card-body">
            <div className="inactive">

              <label class="container3">
                <input type="checkbox" checked="checked" />
                <span class="checkmark3"></span>
              </label>

              <label class="container4">
                <input type="checkbox" checked="checked" />
                <span class="checkmark4"></span>
              </label>

              <label class="switch inactive-switch">
                <input type="checkbox" disabled />
                <span class="sliders round"></span>
              </label>

              <p>Inactive Checkbox</p>

            </div>
            {/* -------------------------------------------------------------------- */}
            <div className="disabled">
              <label class="control control-checkbox">
                <input type="checkbox" disabled="disabled" checked="checked" />
                <div class="control_indicator"></div>
              </label>

              <label class="container2">
                <input type="radio" checked="checked" name="radio2" />
                <span class="checkmark2"></span>
              </label>

              <label class="switch inactive-switch">
                <input type="checkbox" />
                <span class="sliders round"></span>
              </label>

              <p>Disabled Checkbox</p>
            </div>
            {/* ------------------------------------------------------------------- */}
            <div className="active">
              <div class="control-group">
                <label class="control control-checkbox">
                  <input type="checkbox" checked="checked" />
                  <div class="control_indicator"></div>
                </label>
              </div>

              <label class="circle-button">
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>

              <label class="switch">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>

              <p>Active Checkbox</p>
              {/* ---------------------------------------------------------------------- */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Checkbox
