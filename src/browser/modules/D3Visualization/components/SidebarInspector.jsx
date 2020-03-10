import React, { Component } from 'react'

import styled from 'styled-components'
import { mapLabels } from './Inspector'

const Container = styled.div`
  top: 30px;
  right: 0;
  bottom: 0;
  background: white;
  padding: 10px;
  width: 300px;
  position: absolute;
  border-left: #e6e9ef solid 1px;
  border-bottom: #e6e9ef solid 1px;
`

export class SidebarInspector extends Component {
  render() {
    return (
      <Container>
        {mapLabels(this.props.graphStyle, this.props.item.labels)}
        <button>Delete</button>

        <p>PROPS</p>

        <hr />
        <h4>Relationships</h4>
        <p>Rels</p>
      </Container>
    )
  }
}
