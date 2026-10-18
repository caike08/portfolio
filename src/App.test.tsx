import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /carlos henrique motta/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/about' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/hobbies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/contact me' })).toBeInTheDocument()
  })

  it('renders contact links with external behavior only for absolute URLs', () => {
    render(<App />)

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/caikemotta/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')

    const emailLink = screen.getByRole('link', { name: /e-mail/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:galocodingservices@gmail.com')
    expect(emailLink).not.toHaveAttribute('target')
  })
})
