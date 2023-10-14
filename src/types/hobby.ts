import type { IconProp } from "@fortawesome/fontawesome-svg-core"

interface HobbyPropType {
  title: string,
  hobbies: Hobby[],
  icon?: IconProp,
}

interface Hobby {
  hobby: string,
  icon?: IconProp,
  href: string,
}

export type {
  HobbyPropType,
  Hobby
}
