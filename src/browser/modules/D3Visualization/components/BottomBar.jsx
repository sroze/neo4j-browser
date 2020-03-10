import React, { Component } from 'react'

import { StyledInspectorFooter, StyledStatus, StyledStatusBar } from './styled'

export class BottomBar extends Component {
  render() {
    return (
      <StyledStatusBar
        fullscreen={this.props.fullscreen}
        className="status-bar"
      >
        <StyledStatus className="status">
          <button>New</button>
        </StyledStatus>
      </StyledStatusBar>
    )
  }
}
