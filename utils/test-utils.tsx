import {render, RenderOptions, RenderResult} from '@testing-library/react'
import React, {ReactElement, FC} from 'react'
import {store} from '../src/store'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

const AllTheProviders: FC = ({children}) => {
  const history = createMemoryHistory()
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => {
  return render(ui, {wrapper: AllTheProviders, ...options})
}

export * from '@testing-library/react'
export {customRender as render}
