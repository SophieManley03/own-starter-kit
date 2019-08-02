// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import AppRouter from './Route'

// ReactDOM.hydrate(<AppRouter />, document.getElementById('index'))

import * as React from 'react'
import { hydrate } from 'react-dom'
import App from './Route'
hydrate(<App />, document.getElementById('reactele'))
