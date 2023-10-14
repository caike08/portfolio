import { FC } from 'react'

import css from './style.module.scss'

const WelcomeSection: FC = () => {
  return (
    <section id='welcome' className={css.welcomeSection}>
      <div className={css.welcomeImage} />
      <div className={css.titleContainer}>
        <h1 className={css.title}>Carlos Henrique Motta</h1>
        <h5 className={css.description}>Front-end Developer & UX</h5>
      </div>
    </section>
  )
}

export default WelcomeSection
