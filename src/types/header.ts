interface HeaderItemType {
  title: string,
  href: string,
}

interface HeaderPropType {
  addresses: HeaderItemType[],
  hasReachedBreakpoint: boolean,
}

export type {
  HeaderPropType,
  HeaderItemType,
}
