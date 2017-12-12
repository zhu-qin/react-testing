import React from 'react'
import { DrawerPanel } from './components/drawer-panel/drawer-panel.jsx'
import { MainPanel } from './components/main-panel/main-panel.jsx'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let listener = () => {
      clearTimeout(this.stateTimeout)
      this.stateTimeout = setTimeout(() => this.setState({appState: this.props.store.getState()}), 100)
    }
    this.unsubscribe = this.props.store.subscribe(listener)
    this.setState({ appState: this.props.store.getState() })
  }

  componentWillUnmount() {
    this.unsubcribe()
  }

  render() {
    if (!this.state.appState) {
      return null
    }
    return (
      <div className={'flex'}>
        <div className={this.state.appState.settings.isOpen ? 'side-panel' : 'hidden'}>
          <DrawerPanel appState={this.state.appState} actions={this.props.actions}/>
        </div>
        <div>
          <MainPanel appState={this.state.appState} actions={this.props.actions}/>
        </div>
      </div>
    )
  }
}
