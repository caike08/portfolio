type HeaderItemType = {
  title: string,
  href: string,
}

type HeaderPropType = {
  addresses: HeaderItemType[],
  hasReachedBreakpoint: boolean,
}

export type {
  HeaderPropType,
  HeaderItemType,
}
