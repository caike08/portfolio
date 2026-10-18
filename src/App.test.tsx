import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: /carlos henrique motta/i })).toBeInTheDocument()
    expect(screen.getByText('Senior Software Developer / UX')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/about' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/hobbies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: '/contact me' })).toBeInTheDocument()
  })

  it('adds the most recent workplace and keeps the list CV-ordered', () => {
    render(<App />)

    const [aboutLink, listLink] = screen.getAllByRole('link', { name: 'Zup Innovation' })
    expect(aboutLink).toHaveAttribute('href', 'https://www.zup.com.br/')
    expect(listLink).toHaveAttribute('href', 'https://www.zup.com.br/')
    expect(listLink).toHaveAttribute('target', '_blank')

    const reply = screen.getAllByRole('link', { name: 'Reply' })[1]
    // Zup (current) must come before Reply in the "Places I've worked at" list
    expect(listLink.compareDocumentPosition(reply) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
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
