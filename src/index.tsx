import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

export default () => <App />

let rootElement: ReactDOM.Root

export function mount(Component: React.Factory<unknown>, element?: Element) {
  if (!element) {
    element = document.getElementById('app')
  }
  rootElement = ReactDOM.createRoot(element)
  rootElement.render(<Component />)

  if (module.hot) {
    module.hot.accept('./app', () => {
      rootElement.render(<Component />)
    })
  }
}

export function unmount() {
  rootElement.unmount()
}
