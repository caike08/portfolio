import clsx from 'clsx'

import css from './style.module.scss'

import { HeaderPropType } from '../../types/header'

const Header = ({
  addresses,
  hasReachedBreakpoint,
}: HeaderPropType) => {
  return (
    <header className={clsx(css.header, {
      [css.useBackground]: hasReachedBreakpoint,
    })}>
      <nav aria-label='main navigation'>
        <ul className={css.addresses}>
          {addresses.map(({ title, href }) => (
            <li key={title} className={css.item}>
              <a href={href} className={css.address}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
