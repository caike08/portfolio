import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ContactItemType } from '../types/contact';

export const CONTACT_LIST: ContactItemType[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/caikemotta/',
    icon: faLinkedin,
  },
  {
    title: 'E-mail',
    href: 'mailto:galocodingservices@gmail.com',
    icon: faEnvelope,
  }
]
