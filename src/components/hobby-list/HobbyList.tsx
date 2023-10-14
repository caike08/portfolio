
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './style.module.scss'

import { HobbyPropType } from '../../types/hobby'


const HobbyList = ({
  title,
  hobbies,
  icon
}: HobbyPropType) => {
  return (
    <div className={css.hobbyList}>
      <h4 className={css.title}>{icon && <FontAwesomeIcon icon={icon} />} {title}</h4>
      <ul className={css.list}>
        {hobbies.map((hobby, index) => (
          <li key={index} className={css.item}>
            <a
              href={hobby.href}
              className={css.link}
              target='_blank'
              rel='noreferrer'
            >
              {hobby.icon && <FontAwesomeIcon icon={hobby.icon} />}
              {hobby.hobby}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HobbyList
