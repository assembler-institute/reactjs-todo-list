/* eslint-disable prettier/prettier */
import React from 'react'

export default class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const {children} = this.props
    return (
      <>
      {children}
      </>
    )
  }
}