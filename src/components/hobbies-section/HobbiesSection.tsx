import {
  faLaptopCode,
  faCode,
  faGuitar,
  faMugHot
} from '@fortawesome/free-solid-svg-icons'

import css from './style.module.scss'

import {
  WORKPLACES,
  WEB_PLAYGROUND,
  MUSICAL_PROJECT,
  COFFEE_BREAK,
} from '../../constants/hobbies.const'
import HobbyList from '../hobby-list/HobbyList'


const HobbiesSection = () => {
  return (
    <section id='hobbies' className={css.hobbiesSection}>
      <div className={css.container}>
        <HobbyList title='Places I&apos;ve worked at' icon={faLaptopCode} hobbies={WORKPLACES} />
        <HobbyList title='Web Playground' icon={faCode} hobbies={WEB_PLAYGROUND} />
        <HobbyList title='Musical Projects' icon={faGuitar} hobbies={MUSICAL_PROJECT} />
        <HobbyList title='Coffee Break' icon={faMugHot} hobbies={COFFEE_BREAK} />
      </div>
    </section>
  )
}

export default HobbiesSection
