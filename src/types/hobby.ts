import type { IconProp } from "@fortawesome/fontawesome-svg-core"

type HobbyPropType = {
  title: string,
  hobbies: Hobby[],
  icon?: IconProp,
}

type Hobby = {
  hobby: string,
  icon?: IconProp,
  href: string,
}

export type {
  HobbyPropType,
  Hobby
}
