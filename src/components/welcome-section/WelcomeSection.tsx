import { FC } from 'react'
import { useKonami } from 'react-konami-code'

import css from './style.module.scss'

import useToasty from '../../hooks/useToasty'
import ToastSlideIn from '../toast-slide-in/ToastSlideIn'

const EASTER_EGG_TIMEOUT = 1400

const WelcomeSection: FC = () => {
  const { toasty, isPlayingToasty } = useToasty(EASTER_EGG_TIMEOUT) // plays a TOASTY sound while ToastSlideIn is shown
  useKonami(toasty) // Excecute any action based on a keycode press: ↑ ↑ ↓ ↓ ← → ← → B A

  return (
    <section id='welcome' className={css.welcomeSection}>
      <div className={css.welcomeImage} />
      <div className={css.titleContainer}>
        <h1 className={css.title}>Carlos Henrique Motta</h1>
        <h5 className={css.description}>Front-end Developer & UX</h5>
      </div>
      <ToastSlideIn show={isPlayingToasty} />
    </section>
  )
}

export default WelcomeSection
