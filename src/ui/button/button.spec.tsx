import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import 'jest-styled-components'

import { render } from '@testing-library/react'

import { ButtonComprar, Skeleton } from './button.composition'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<ButtonComprar />)
  })

  it('should render Primary', () => {
    expect(render(<ButtonComprar />).container).toMatchSnapshot()
  })

  it('should render Skeleton', () => {
    expect(render(<Skeleton />).container).toMatchSnapshot()
  })
})
