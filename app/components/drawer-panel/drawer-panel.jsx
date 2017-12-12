import React from 'react'

export class DrawerPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>
        {`${this.props.appState.settings.isOpen}`}
      </div>
    )
  }
}
