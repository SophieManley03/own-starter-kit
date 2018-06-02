const styles = require('./hello.less')

import * as React from 'react'


export const Hello = () => {
  console.log('eeee')
  return <div className={ styles.hello }>Hello you!</div>
}