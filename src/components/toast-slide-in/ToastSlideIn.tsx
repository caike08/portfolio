import css from './style.module.scss'

import { ToastSlideInProps } from '../../types/toast'


const ToastSlideIn = ({ show }: ToastSlideInProps) => {
  if (!show) {
    return null
  }

  return <div aria-hidden='true' className={css.toastSlideIn} />
}

export default ToastSlideIn
