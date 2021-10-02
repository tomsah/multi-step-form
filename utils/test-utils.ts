import {
  render,
  queries,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import {ReactElement} from 'react'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, {queries: {...queries}, ...options})

export * from '@testing-library/react'
export {customRender as render}
