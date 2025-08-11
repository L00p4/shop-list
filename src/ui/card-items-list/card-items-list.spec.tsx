import '@testing-library/jest-dom'
import 'jest-environment-jsdom'
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'

import CardItemsList from '.'
import { Primary, Skeleton } from './card-items-list.composition'

describe('<CardItemsList />', () => {
  it('should render the heading', () => {
    render(<CardItemsList />)

    expect(
      screen.getByRole('heading', { name: /nome da lista aqui/i })
    ).toBeInTheDocument()
  })

  it('should render Primary', () => {
    expect(render(<Primary />).container).toMatchSnapshot()
  })

  it('should render Skeleton', () => {
    expect(render(<Skeleton />).container).toMatchSnapshot()
  })
})
