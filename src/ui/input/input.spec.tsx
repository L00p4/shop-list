import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import 'jest-styled-components'

import { render } from '@testing-library/react'

import Input from '.'
import { Primary, Skeleton } from './input.composition'

describe('<Input />', () => {
  it('should render the heading', () => {
    render(<Input />)
  })

  it('should render Primary', () => {
    expect(render(<Primary />).container).toMatchSnapshot()
  })

  it('should render Skeleton', () => {
    expect(render(<Skeleton />).container).toMatchSnapshot()
  })
})
