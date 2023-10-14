import { FC } from 'react'

import css from './style.module.scss'

import { ToastSlideInProps } from '../../types/toast'

const ToastSlideIn: FC<ToastSlideInProps> = ({
  show,
}) => {
  if(!show) {
    return null
  }

  return <div className={css.toastSlideIn} />
}

export default ToastSlideIn
