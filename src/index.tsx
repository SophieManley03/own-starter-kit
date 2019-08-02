// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import AppRouter from './Route'

// ReactDOM.hydrate(<AppRouter />, document.getElementById('index'))

import * as React from 'react'
import { hydrate } from 'react-dom'
import App from './Route'
// tslint:disable-next-line:no-import-side-effect
import './style'
hydrate(<App />, document.getElementById('reactele'))
