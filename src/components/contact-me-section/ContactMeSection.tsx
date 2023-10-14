import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import css from './style.module.scss'

import { CONTACT_LIST } from '../../constants/contact.const'
import { ContactItemType } from '../../types/contact'


const ContactMeSection = () => {
  return (
    <section id='contact' className={css.contactSection}>
      <div className={css.container}>
        <h2 className={css.title}>/contact me</h2>

        <ul className={css.list}>
          {CONTACT_LIST.map(({ title, href, icon }: ContactItemType) => (
            <li key={title} className={css.item}>
              <a
                href={href}
                className={css.link}
                target='_blank'
                rel='noreferrer'
              >
                {icon && <FontAwesomeIcon icon={icon} className={css.icon} />}
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ContactMeSection
