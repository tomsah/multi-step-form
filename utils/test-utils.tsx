import {render, RenderOptions, RenderResult} from '@testing-library/react'
import React, {ReactElement, FC} from 'react'
import {store} from '../src/store'
import {Provider} from 'react-redux'

const AllTheProviders: FC = ({children}) => {
  return <Provider store={store}>{children}</Provider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => {
  return render(ui, {wrapper: AllTheProviders, ...options})
}

export * from '@testing-library/react'
export {customRender as render}
